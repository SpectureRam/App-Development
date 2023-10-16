package com.ecommerce.repository;
import com.ecommerce.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderDetails, Long> {
}
