package com.ecommerce.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.math.BigInteger;

@Entity
    public class Payment {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String razorpayOrderId;
        private String secretKey;
        private String secretId;
        private String pgName;
        private BigInteger amount;

        public Payment(String razorpayOrderId, String secretKey, String secretId, String pgName, BigInteger amount) {
            this.razorpayOrderId = razorpayOrderId;
            this.secretKey = secretKey;
            this.secretId = secretId;
            this.pgName = pgName;
            this.amount = amount;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getRazorpayOrderId() {
            return razorpayOrderId;
        }

        public void setRazorpayOrderId(String razorpayOrderId) {
            this.razorpayOrderId = razorpayOrderId;
        }

        public String getSecretKey() {
            return secretKey;
        }

        public void setSecretKey(String secretKey) {
            this.secretKey = secretKey;
        }

        public String getSecretId() {
            return secretId;
        }

        public void setSecretId(String secretId) {
            this.secretId = secretId;
        }

        public String getPgName() {
            return pgName;
        }

        public void setPgName(String pgName) {
            this.pgName = pgName;
        }

        public BigInteger getAmount() {
            return amount;
        }

        public void setAmount(BigInteger amount) {
            this.amount = amount;
        }

    public Payment(Long id, String razorpayOrderId, String secretKey, String secretId, String pgName, BigInteger amount) {
        this.id = id;
        this.razorpayOrderId = razorpayOrderId;
        this.secretKey = secretKey;
        this.secretId = secretId;
        this.pgName = pgName;
        this.amount = amount;
    }
    public Payment(){

    }

}
