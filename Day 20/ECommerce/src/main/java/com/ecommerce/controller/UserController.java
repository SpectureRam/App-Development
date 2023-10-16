package com.ecommerce.controller;
import com.ecommerce.dto.CartItemDTO;
import com.ecommerce.entity.User;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{uid}")
    public ResponseEntity<User> getUserById(@PathVariable Long uid) {
        User user = userService.getUserById(uid);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @PutMapping("/{uid}")
    public ResponseEntity<User> updateUser(@PathVariable Long uid, @RequestBody User user) {
        User updatedUser = userService.updateUser(uid, user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{uid}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long uid) {
        userService.deleteUser(uid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/addToCart")
    public ResponseEntity<String> addToCart(@RequestBody Map<String, Object> request) {
        Long uid = Long.parseLong(request.get("userId").toString());
        Long productId = Long.parseLong(request.get("productId").toString());
        int quantity = Integer.parseInt(request.get("quantity").toString());

        try {
            userService.addToCart(uid, productId, quantity);
            return ResponseEntity.ok("Product added to cart successfully");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with id: " + uid);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding to cart");
        }
    }

    @GetMapping("/{userId}/cart")
    public ResponseEntity<Map<String, Object>> getUserCart(@PathVariable Long userId) {
        Map<String, Object> cartItems = userService.getUserCartWithDetails(userId);
        return ResponseEntity.ok(cartItems);
    }

    @DeleteMapping("/{userId}/cart/{productId}")
    public ResponseEntity<String> removeItemFromCart(@PathVariable Long userId, @PathVariable Long productId) {
        userService.removeItemFromCart(userId, productId);
        return new ResponseEntity<>("Item removed from the cart", HttpStatus.OK);
    }
    @PutMapping("/{userId}/cart/{productId}/decrease")
    public ResponseEntity<?> decreaseCartItemQuantity(@PathVariable Long userId, @PathVariable Long productId) {
        userService.decreaseCartItemQuantity(userId, productId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{userId}/cart/{productId}/increase")
    public ResponseEntity<?> increaseCartItemQuantity(@PathVariable Long userId, @PathVariable Long productId) {
        userService.increaseCartItemQuantity(userId, productId);
        return ResponseEntity.ok().build();
    }
}
