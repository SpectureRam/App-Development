package com.ecommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;
    private String productName;
    private double productPrice;
    private String productImage;

    @ManyToOne
    @JoinColumn(name = "productCategory")
    private ProductCategory productCategory;
    private String productDescription;

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(ProductCategory productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Products(long productId, String productName, double productPrice, String productImage, ProductCategory productCategory, String productDescription) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.productCategory = productCategory;
        this.productDescription = productDescription;
    }

    public Products() {

    }
}
