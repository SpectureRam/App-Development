package com.ecommerce.controller;
import com.ecommerce.entity.OrderDetails;
import com.ecommerce.entity.enumerate.OrderStatus;
import com.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/pc")
    public ResponseEntity<OrderDetails> placeOrder(@RequestBody OrderDetails orderDetails) {
        OrderDetails savedOrder = orderService.saveOrder(orderDetails);
        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderDetails> getOrderById(@PathVariable Long orderId) {
        Optional<OrderDetails> orderDetails = orderService.getOrderById(orderId);
        return orderDetails.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/all")
    public ResponseEntity<Iterable<OrderDetails>> getAllOrders() {
        Iterable<OrderDetails> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @PutMapping("/update-status/{orderId}")
    public ResponseEntity<OrderDetails> updateOrderStatus(
            @PathVariable Long orderId,
            @RequestParam OrderStatus newStatus
    ) {
        OrderDetails updatedOrder = orderService.updateOrderStatus(orderId, newStatus);
        return updatedOrder != null ?
                ResponseEntity.ok(updatedOrder) :
                ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{orderId}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long orderId) {
        orderService.deleteOrder(orderId);
        return ResponseEntity.ok("Order deleted successfully!");
    }
}
