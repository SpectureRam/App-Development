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
@CrossOrigin(origins = "http://localhost:3000")
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
        Optional<Products> product = Optional.ofNullable(productsService.getProductById(id));
        return product.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Products> addProducts(@RequestBody Products products){
        Products addedProduct = productsService.addProducts(products).getBody();
        return new ResponseEntity<>(addedProduct,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducts(@PathVariable Long id){
        Optional<Products> existingUser = Optional.ofNullable(productsService.getProductById(id));
        if(existingUser.isPresent()) {
            productsService.deleteProducts(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{productId}")
    public ResponseEntity<Products> updateProduct(@PathVariable long productId, @RequestBody Products product) {
        Products updatedProduct = productsService.updateProduct(productId, product);
        return updatedProduct != null
                ? new ResponseEntity<>(updatedProduct, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/byCategory/{categoryId}")
    public ResponseEntity<List<Products>> getProductsByCategory(@PathVariable Integer categoryId) {
        List<Products> products = productsService.getProductsByCategoryId(categoryId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
