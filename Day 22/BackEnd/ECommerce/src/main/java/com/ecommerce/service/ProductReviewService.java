package com.ecommerce.service;
import com.ecommerce.entity.ProductReview;
import com.ecommerce.repository.ProductReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ProductReviewService {
    @Autowired
    ProductReviewRepository productReviewRepository;

    public ResponseEntity<List<ProductReview>> getAllReviews() {
        List<ProductReview> reviews = productReviewRepository.findAll();
        return ResponseEntity.ok(reviews);
    }

    public ResponseEntity<ProductReview> getReviewById(Long id) {
        return productReviewRepository.findById(id)
                .map(review -> ResponseEntity.ok(review))
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<ProductReview> saveReview(ProductReview review) {
        ProductReview savedReview = productReviewRepository.save(review);
        return ResponseEntity.ok(savedReview);
    }

    public ResponseEntity<Void> deleteReview(Long id) {
        if (productReviewRepository.existsById(id)) {
            productReviewRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    public List<ProductReview> getReviewsByProductId(Long productId) {
        return productReviewRepository.findByProductId(productId);
    }
}