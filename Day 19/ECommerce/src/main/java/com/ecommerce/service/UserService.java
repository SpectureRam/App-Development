package com.ecommerce.service;
import com.ecommerce.dto.CartItemDTO;
import com.ecommerce.entity.Products;
import com.ecommerce.entity.User;
import com.ecommerce.repository.ProductsRepository;
import com.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductsRepository productRepository;

    public User findUserByEmail(String username) {
        Optional<User> userOptional = userRepository.findByEmail(username);

        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new UsernameNotFoundException("User not found!");
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long uid) {
        Optional<User> optionalUser = userRepository.findById(uid);
        return optionalUser.orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long uid, User user) {
        user.setUid(uid);
        return userRepository.save(user);
    }

    public void deleteUser(Long uid) {
        userRepository.deleteById(uid);
    }

    public void addToCart(Long uid, Long productId) {
        User user = userRepository.findById(uid)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + uid));
        user.getCart().add(productId);
        userRepository.save(user);
    }
    public Object getUserCart(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        // Assuming User has a 'cart' field representing the list of product IDs
        List<Long> cartItems = user.getCart();

        // You may have a separate ProductService to fetch product details based on product IDs

        // Directly returning a map with relevant information
        Map<String, Object> response = new HashMap<>();
        response.put("userId", user.getUid());
        response.put("cartItems", cartItems);

        return response;
    }
    public List<CartItemDTO> getUserCartWithDetails(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        List<CartItemDTO> cartItems = new ArrayList<>();

        for (Long productId : user.getCart()) {
            Products product = productRepository.findById(productId)
                    .orElseThrow(() -> new NoSuchElementException("Product not found with id: " + productId));

            CartItemDTO cartItemDTO = new CartItemDTO();
            cartItemDTO.setProductId(product.getProductId());
            cartItemDTO.setProductName(product.getProductName());
            cartItemDTO.setProductPrice(product.getProductPrice());
            cartItemDTO.setProductImage(product.getProductImage());
            cartItems.add(cartItemDTO);
        }

        return cartItems;
    }
    public void removeItemFromCart(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        user.getCart().remove(productId);

        userRepository.save(user);
    }
    public void decreaseCartItemQuantity(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        List<Long> cartItems = user.getCart();

        if (cartItems.contains(productId)) {
            // If the item is in the cart, decrease its quantity
            // You may want to check for minimum quantity as well
            cartItems.remove(productId);
        }

        userRepository.save(user);
    }

    public void increaseCartItemQuantity(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        List<Long> cartItems = user.getCart();

        // If the item is in the cart, increase its quantity
        if (cartItems.contains(productId)) {
            cartItems.add(productId);
        } else {
            // If the item is not in the cart, you may want to add it
            cartItems.add(productId);
        }

        userRepository.save(user);
    }
}
