package com.ecommerce.controller;
import com.ecommerce.entity.ProductReview;
import com.ecommerce.service.ProductReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/productreviews")
public class ProductReviewController {
    @Autowired
    ProductReviewService productReviewService;

    @GetMapping
    public ResponseEntity<List<ProductReview>> getAllReviews() {
        return productReviewService.getAllReviews();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductReview> getReviewById(@PathVariable Long id) {
        return productReviewService.getReviewById(id);
    }

    @PostMapping
    public ResponseEntity<ProductReview> saveReview(@RequestBody ProductReview review) {
        return productReviewService.saveReview(review);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        return productReviewService.deleteReview(id);
    }

    @GetMapping("/byProduct/{productId}")
    public ResponseEntity<List<ProductReview>> getProductReviews(@PathVariable Long productId) {
        List<ProductReview> reviews = productReviewService.getReviewsByProductId(productId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
}
