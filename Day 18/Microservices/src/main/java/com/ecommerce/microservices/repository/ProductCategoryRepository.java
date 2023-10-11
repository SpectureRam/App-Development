package com.ecommerce.microservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.microservices.entity.ProductCategory;


@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Integer> {
}