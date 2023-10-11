package com.ecommerce.repository;
import com.ecommerce.entity.ProductReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductReviewRepository extends JpaRepository<ProductReview, Long> {
    @Query("SELECT pr FROM ProductReview pr WHERE pr.product.id = :productId")
    List<ProductReview> findByProductId(Long productId);
}
