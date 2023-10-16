package com.ecommerce.microservices.entity;

import jakarta.persistence.*;

@Entity
public class ProductReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reviewId;

    @ManyToOne
    @JoinColumn(name = "productId")
    private Products product;

    private int rating;
    private String comment;

    public ProductReview(long reviewId, Products product, int rating, String comment) {
        this.reviewId = reviewId;
        this.product = product;
        this.rating = rating;
        this.comment = comment;
    }

    public long getReviewId() {
        return reviewId;
    }

    public void setReviewId(long reviewId) {
        this.reviewId = reviewId;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public ProductReview() {

    }
}
