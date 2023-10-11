package com.ecommerce.microservices.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.microservices.entity.Products;
import com.ecommerce.microservices.repository.ProductsRepository;

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
    public Products updateProducts(Products products) {
        return productsRepository.save(products);
    }
}