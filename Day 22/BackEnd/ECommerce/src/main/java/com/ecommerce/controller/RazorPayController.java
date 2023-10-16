package com.ecommerce.controller;
import com.ecommerce.entity.OrderDetails;
import com.ecommerce.entity.Payment;
import com.ecommerce.entity.enumerate.OrderStatus;
import com.ecommerce.request.OrderRequest;
import com.ecommerce.response.OrderResponse;
import com.ecommerce.service.OrderService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.math.BigInteger;

@RestController
@RequestMapping("/pg")
public class RazorPayController {

    @PersistenceContext
    private EntityManager entityManager;

    private Payment payment;
    private OrderDetails orderDetails;
    private OrderService orderService;
    private RazorpayClient client;
    private static final String SECRET_ID1 = "rzp_test_60QGs0N7xyVBaj";
    private static final String SECRET_KEY1 = "pqCyFI0JgNtJCOD3FGFy86U3";

    @Transactional(propagation = Propagation.REQUIRED)
    @RequestMapping(path = "/createOrder", method = RequestMethod.POST)
    public OrderResponse createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse response = new OrderResponse();
        try {
            client = new RazorpayClient(SECRET_ID1, SECRET_KEY1);
            Order order = createRazorPayOrder(orderRequest.getAmount());
            System.out.println("---------------------------");
            String orderId = (String) order.get("id");
            System.out.println("Order ID: " + orderId);
            System.out.println("---------------------------");
            response.setRazorpayOrderId(orderId);
            response.setApplicationFee("" + orderRequest.getAmount());
            response.setSecretKey(SECRET_KEY1);
            response.setSecretId(SECRET_ID1);
            response.setPgName("razor1");

            // Save payment details to the database
            Payment payment = new Payment(orderId, SECRET_KEY1, SECRET_ID1, "razor1", orderRequest.getAmount());
            entityManager.persist(payment);

            return response;
        } catch (RazorpayException e) {
            e.printStackTrace();
        }
        return response;
    }

    private Order createRazorPayOrder(BigInteger amount) throws RazorpayException {
        JSONObject options = new JSONObject();
        options.put("amount", amount.multiply(new BigInteger("100")));
        options.put("currency", "INR");
        options.put("receipt", "txn_123456");
        options.put("payment_capture", 1);
        return client.orders.create(options);
    }

}
