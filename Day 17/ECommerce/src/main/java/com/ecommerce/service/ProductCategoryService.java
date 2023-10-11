package com.ecommerce.service;
import com.ecommerce.entity.ProductCategory;
import com.ecommerce.repository.ProductCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;

@Service
public class ProductCategoryService {
    @Autowired
    ProductCategoryRepository productCategoryRepository;
    @Bean
    public RestTemplate restTemplate1(){
        return new RestTemplate();
    }
    public List<ProductCategory> getAllProductCategory() {
        ResponseEntity<List<ProductCategory>> responseEntity = restTemplate1().exchange("http://localhost:5225/api/productcategory", HttpMethod.GET, null, new ParameterizedTypeReference<List<ProductCategory>>() {});
        return responseEntity.getBody();
    }
    public ProductCategory getProductCategoryById(Integer id) {
        ResponseEntity<ProductCategory> responseEntity = restTemplate1().getForEntity("http://localhost:5225/api/productcategory/{id}", ProductCategory.class, id);
        return responseEntity.getBody();
    }
    public void deleteProducts(Integer id) {
        HashMap<String, Integer> uriVariables = new HashMap<>();
        uriVariables.put("id", id);
        restTemplate1().exchange("http://localhost:5225/api/productcategory/{id}", HttpMethod.DELETE, null, ProductCategory.class, uriVariables);
    }
    public ResponseEntity<ProductCategory> addProductCategory(ProductCategory productCategory) {
        return new RestTemplate().postForEntity("http://localhost:5225/api/productcategory", productCategory, ProductCategory.class);
    }
    public ProductCategory updateProducts(ProductCategory productCategory) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<ProductCategory> requestEntity = new HttpEntity<>(productCategory, headers);

        ResponseEntity<ProductCategory> responseEntity = restTemplate1().exchange(
                "http://localhost:5225/api/productcategory/{id}",
                HttpMethod.PUT,
                requestEntity,
                ProductCategory.class
        );

        return responseEntity.getBody();
    }
}