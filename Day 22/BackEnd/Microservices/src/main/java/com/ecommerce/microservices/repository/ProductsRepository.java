package com.ecommerce.microservices.repository;
import com.ecommerce.microservices.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductsRepository extends JpaRepository<Products,Long> {
    @Query("SELECT p FROM Products p WHERE p.productCategory.categoryId = :categoryId")
    List<Products> findByProductCategory_CategoryId(@Param("categoryId") Integer categoryId);
}
