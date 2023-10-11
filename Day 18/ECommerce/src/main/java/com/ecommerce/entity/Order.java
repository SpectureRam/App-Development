package com.ecommerce.entity;
import com.ecommerce.entity.enumerate.Role;
import jakarta.persistence.*;
import java.util.Date;
@Entity
@Table(name = "order_details")
public class Order {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long orderId;

        @ManyToOne
        @JoinColumn(name = "uid")
        private User user;

        @Column(name = "order_date")
        private Date orderDate;

        @Column(name = "total_amount")
        private double totalAmount;

        public Order() {
            // Default constructor
        }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Order(Long orderId, User user, Date orderDate, double totalAmount) {
        this.orderId = orderId;
        this.user = user;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
    }
    public void setDefaultRole(){
            if(this.user == null || this.user.getRole()== null){
                this.user.setRole(Role.valueOf("CUSTOMER"));
        }
    }
}