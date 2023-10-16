package com.ecommerce.service;

// OrderService.java
import com.ecommerce.entity.OrderDetails;
import com.ecommerce.entity.enumerate.OrderStatus;
import com.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public OrderDetails saveOrder(OrderDetails orderDetails) {
        return orderRepository.save(orderDetails);
    }

    public Optional<OrderDetails> getOrderById(Long orderId) {
        return orderRepository.findById(orderId);
    }

    public Iterable<OrderDetails> getAllOrders() {
        return orderRepository.findAll();
    }

    public OrderDetails updateOrderStatus(Long orderId, OrderStatus newStatus) {
        return orderRepository.findById(orderId)
                .map(order -> {
                    order.setOrderStatus(newStatus);
                    return orderRepository.save(order);
                })
                .orElse(null);
    }

    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}
