package com.ecommerce.entity;
import com.ecommerce.entity.enumerate.OrderStatus;
import jakarta.persistence.*;

@Entity
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String cardHolderName;
    private String cardNumber;
    private String cardExpiry;
    private String cardCvc;
    private String billingAddress;
    private String billingState;
    private String billingZip;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardExpiry() {
        return cardExpiry;
    }

    public void setCardExpiry(String cardExpiry) {
        this.cardExpiry = cardExpiry;
    }

    public String getCardCvc() {
        return cardCvc;
    }

    public void setCardCvc(String cardCvc) {
        this.cardCvc = cardCvc;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public String getBillingState() {
        return billingState;
    }

    public void setBillingState(String billingState) {
        this.billingState = billingState;
    }

    public String getBillingZip() {
        return billingZip;
    }

    public void setBillingZip(String billingZip) {
        this.billingZip = billingZip;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OrderDetails(Long id, String email, String cardHolderName, String cardNumber, String cardExpiry, String cardCvc, String billingAddress, String billingState, String billingZip, OrderStatus orderStatus, User user) {
        this.id = id;
        this.email = email;
        this.cardHolderName = cardHolderName;
        this.cardNumber = cardNumber;
        this.cardExpiry = cardExpiry;
        this.cardCvc = cardCvc;
        this.billingAddress = billingAddress;
        this.billingState = billingState;
        this.billingZip = billingZip;
        this.orderStatus = orderStatus;
        this.user = user;
    }
    public OrderDetails(){
        //Do nothing
    }
}

