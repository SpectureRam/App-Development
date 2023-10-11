package com.ecommerce.controller;
import com.ecommerce.entity.ProductCategory;
import com.ecommerce.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
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
        Optional<ProductCategory> productcategory = Optional.ofNullable(productCategoryService.getProductCategoryById(id));
        return productcategory.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ProductCategory> addProductCategory(@RequestBody ProductCategory productcategory){
        ProductCategory addedProductCategory = productCategoryService.addProductCategory(productcategory).getBody();
        return new ResponseEntity<>(addedProductCategory,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        Optional<ProductCategory> existingUser = Optional.ofNullable(productCategoryService.getProductCategoryById(id));
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
        Optional<ProductCategory> existingUser = Optional.ofNullable(productCategoryService.getProductCategoryById(id));
        if(existingUser.isPresent()) {
            productcategory.setCategoryId(id);
            ProductCategory updatedProduct = productCategoryService.updateProducts(productcategory);
            return new ResponseEntity<>(updatedProduct,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
