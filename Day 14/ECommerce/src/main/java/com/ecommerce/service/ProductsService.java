package com.ecommerce.service;
import com.ecommerce.entity.Products;
import com.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
    public Products updateProducts(Products products) {
        return productsRepository.save(products);
    }
}
