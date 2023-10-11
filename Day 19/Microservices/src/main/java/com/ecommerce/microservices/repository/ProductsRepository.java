package com.ecommerce.microservices.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.microservices.entity.Products;
@Repository
public interface ProductsRepository extends JpaRepository<Products,Long> {
}
