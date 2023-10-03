package com.ecommerce.controller;

import com.ecommerce.entity.Products;
import com.ecommerce.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductsController {
    @Autowired
    ProductsService productsService;

    @GetMapping
    public ResponseEntity<List<Products>> getAllProducts(){
        List<Products> getProducts = productsService.getAllProducts();
        return new ResponseEntity<>(getProducts, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable long id){
        Optional<Products> product = productsService.getProductsById(id);
        return product.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Products> addProducts(@RequestBody Products products){
        Products addedProduct = productsService.addProducts(products);
        return new ResponseEntity<>(addedProduct,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id){
        Optional<Products> existingUser = productsService.getProductsById(id);
        if(existingUser.isPresent()) {
            productsService.deleteProducts(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Products> updateProduct(@PathVariable Long id, @RequestBody Products product){
        Optional<Products> existingUser = productsService.getProductsById(id);
        if(existingUser.isPresent()) {
            product.setProductId(id);
            Products updatedUser = productsService.updateProducts(product);
            return new ResponseEntity<>(updatedUser,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
