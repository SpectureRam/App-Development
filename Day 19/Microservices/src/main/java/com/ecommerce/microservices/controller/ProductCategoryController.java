package com.ecommerce.microservices.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.microservices.entity.ProductCategory;
import com.ecommerce.microservices.service.ProductCategoryService;

@RestController
@RequestMapping("/api/productcategory")
public class ProductCategoryController {
    @Autowired
    ProductCategoryService productCategoryService;

    @GetMapping
    public ResponseEntity<List<ProductCategory>> getAllProductCategory(){
        List<ProductCategory> getProductCategory = productCategoryService.getAllProductCategory();
        return new ResponseEntity<>(getProductCategory, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductCategory> getProductCategoryById(@PathVariable Integer id){
        Optional<ProductCategory> productcategory = productCategoryService.getProductCategoryById(id);
        return productcategory.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ProductCategory> addProductCategory(@RequestBody ProductCategory productcategory){
        ProductCategory addedProductCategory = productCategoryService.addProductCategory(productcategory);
        return new ResponseEntity<>(addedProductCategory,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        Optional<ProductCategory> existingUser = productCategoryService.getProductCategoryById(id);
        if(existingUser.isPresent()) {
            productCategoryService.deleteProducts(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProductCategory> updateProduct(@PathVariable Integer id, @RequestBody ProductCategory productcategory){
        Optional<ProductCategory> existingUser = productCategoryService.getProductCategoryById(id);
        if(existingUser.isPresent()) {
            productcategory.setCategoryId(id);
            ProductCategory updatedUser = productCategoryService.updateProducts(productcategory);
            return new ResponseEntity<>(updatedUser,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
