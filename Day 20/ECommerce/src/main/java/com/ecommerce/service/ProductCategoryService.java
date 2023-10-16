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
import java.util.Optional;

@Service
public class ProductCategoryService {
    @Autowired
    ProductCategoryRepository productCategoryRepository;

    public List<ProductCategory> getAllCategories() {
        return productCategoryRepository.findAll();
    }


    public ProductCategory getCategoryById(int categoryId) {
        Optional<ProductCategory> optionalCategory = productCategoryRepository.findById(categoryId);
        return optionalCategory.orElse(null);
    }


    public ProductCategory createCategory(ProductCategory category) {
        return productCategoryRepository.save(category);
    }

    public ProductCategory updateCategory(int categoryId, ProductCategory category) {
        if (productCategoryRepository.existsById(categoryId)) {
            category.setCategoryId(categoryId);
            return productCategoryRepository.save(category);
        }
        return null;
    }


    public void deleteCategory(int categoryId) {
        productCategoryRepository.deleteById(categoryId);
    }
}