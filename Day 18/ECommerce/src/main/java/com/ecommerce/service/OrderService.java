package com.ecommerce.service;
import com.ecommerce.entity.Order;
import com.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
    public Optional<Order> getOrderById(Long orderId) {
        return orderRepository.findById(orderId);
    }
    public Order createOrder(Order order) {
        if (order.getUser() == null) {
            throw new IllegalArgumentException("User must be specified for the order");
        }
        return orderRepository.save(order);
    }
    public Order updateOrder(Long orderId, Order order) {
        Optional<Order> existingOrderOptional = orderRepository.findById(orderId);

        if (existingOrderOptional.isEmpty()) {
            throw new RuntimeException("Order with ID " + orderId + " not found");
        }

        Order existingOrder = existingOrderOptional.get();
        existingOrder.setUser(order.getUser());
        existingOrder.setOrderDate(order.getOrderDate());
        existingOrder.setTotalAmount(order.getTotalAmount());

        return orderRepository.save(existingOrder);
    }
    public void deleteOrder(Long orderId) {
        Optional<Order> orderOptional = orderRepository.findById(orderId);

        if (orderOptional.isEmpty()) {
            throw new RuntimeException("Order with ID " + orderId + " not found");
        }

        orderRepository.deleteById(orderId);
    }
}
