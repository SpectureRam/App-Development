package com.ecommerce.entity;

import jakarta.persistence.*;

@Entity
public class ProductReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reviewId;

    @ManyToOne
    @JoinColumn(name = "productId")
    private Products product;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    private int rating;
    private String comment;

    public ProductReview(long reviewId, Products product, User user, int rating, String comment) {
        this.reviewId = reviewId;
        this.product = product;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
    public ProductReview(){

    }
}