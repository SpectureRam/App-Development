package com.ecommerce.service;
import com.ecommerce.entity.Products;
import com.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
@Service
public class ProductsService {
    @Autowired
    ProductsRepository productsRepository;
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
    public List<Products> getAllProducts() {
        ResponseEntity<List<Products>> responseEntity = restTemplate().exchange("http://localhost:5225/api/products", HttpMethod.GET, null, new ParameterizedTypeReference<List<Products>>() {});
        return responseEntity.getBody();
    }

    public Products getProductById(Long id) {
        ResponseEntity<Products> responseEntity = restTemplate().getForEntity("http://localhost:5225/api/products/{id}", Products.class, id);

        return responseEntity.getBody();
    }

    public ResponseEntity<Products> addProducts(Products products) {
        return new RestTemplate().postForEntity("http://localhost:5225/api/products", products, Products.class);
    }
    public void deleteProducts(Long id) {
        HashMap<String, Long> uriVariables = new HashMap<>();
        uriVariables.put("id", id);
        restTemplate().exchange("http://localhost:5225/api/products/{id}", HttpMethod.DELETE, null, Products.class, uriVariables);
    }
    public Products updateProduct(Long id, Products product) {
        String microserviceUrl = "http://localhost:8081/api/product/editProduct/" + id;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Products> requestEntity = new HttpEntity<>(product, headers);

        ResponseEntity<Products> responseEntity = restTemplate().exchange(
                microserviceUrl,
                HttpMethod.PUT,
                requestEntity,
                Products.class
        );

        return responseEntity.getBody();
    }
    public List<Products> getProductsByCategoryId(Integer categoryId) {
        return productsRepository.findByProductCategory_CategoryId(categoryId);
    }
}