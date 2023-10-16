package com.ecommerce.microservices.service;
import com.ecommerce.microservices.entity.Products;
import com.ecommerce.microservices.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
@Service
public class ProductsService {
    @Autowired
    ProductsRepository productsRepository;
    public List<Products> getAllProducts(){
        return productsRepository.findAll();
    }
    public Optional<Products> getProductsById(Long id) {
        return productsRepository.findById(id);
    }
    public Products addProducts(Products products) {
        return productsRepository.save(products);
    }
    public void deleteProducts(Long id) {
        productsRepository.deleteById(id);
    }
    public Products updateProduct(long productId, Products product) {
        if (productsRepository.existsById(productId)) {
            product.setProductId(productId);
            return productsRepository.save(product);
        }
        return null;
    }

    public List<Products> getProductsByCategoryId(Integer categoryId) {
        return productsRepository.findByProductCategory_CategoryId(categoryId);
    }
}