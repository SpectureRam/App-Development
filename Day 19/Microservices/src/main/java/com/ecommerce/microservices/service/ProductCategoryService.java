package com.ecommerce.microservices.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.microservices.entity.ProductCategory;
import com.ecommerce.microservices.repository.ProductCategoryRepository;

@Service
public class ProductCategoryService {
    @Autowired
    ProductCategoryRepository productCategoryRepository;
    public List<ProductCategory> getAllProductCategory(){
        return productCategoryRepository.findAll();
    }
    public Optional<ProductCategory> getProductCategoryById(Integer id) {
        return productCategoryRepository.findById(id);
    }
    public ProductCategory addProductCategory(ProductCategory productcategory) {
        return productCategoryRepository.save(productcategory);
    }
    public void deleteProducts(Integer id) {
        productCategoryRepository.deleteById(id);
    }
    public ProductCategory updateProducts(ProductCategory productcategory) {
        return productCategoryRepository.save(productcategory);
    }
}