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

    public void addToCart(Long uid, Long productId, int quantity) {
        User user = userRepository.findById(uid)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + uid));

        Map<Long, Integer> cart = user.getCart();

        // Update the quantity for the existing product or add a new entry
        cart.put(productId, cart.getOrDefault(productId, 0) + quantity);

        userRepository.save(user);
    }


    public Map<String, Object> getUserCartWithDetails(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        Map<Long, Integer> cartItems = user.getCart();

        Map<String, Object> response = new HashMap<>();
        response.put("userId", user.getUid());
        response.put("cartItems", convertCartItemsToDTO(cartItems));

        return response;
    }

    private List<CartItemDTO> convertCartItemsToDTO(Map<Long, Integer> cartItems) {
        List<CartItemDTO> result = new ArrayList<>();

        for (Map.Entry<Long, Integer> entry : cartItems.entrySet()) {
            Long productId = entry.getKey();
            Integer quantity = entry.getValue();

            Products product = productRepository.findById(productId)
                    .orElseThrow(() -> new NoSuchElementException("Product not found with id: " + productId));

            CartItemDTO cartItemDTO = new CartItemDTO();
            cartItemDTO.setProductId(product.getProductId());
            cartItemDTO.setProductName(product.getProductName());
            cartItemDTO.setProductPrice(product.getProductPrice());
            cartItemDTO.setProductImage(product.getProductImage());
            cartItemDTO.setQuantity(quantity);

            result.add(cartItemDTO);
        }

        return result;
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

        Map<Long, Integer> cart = user.getCart();

        // Decrease the quantity for the existing product
        if (cart.containsKey(productId)) {
            int existingQuantity = cart.get(productId);
            if (existingQuantity > 1) {
                cart.put(productId, existingQuantity - 1);
            } else {
                cart.remove(productId);
            }
        }
        userRepository.save(user);
    }

    public void increaseCartItemQuantity(Long userId, Long productId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException("User not found with id: " + userId));

        Map<Long, Integer> cart = user.getCart();

        // Increase the quantity for the existing product
        cart.put(productId, cart.getOrDefault(productId, 0) + 1);

        userRepository.save(user);
    }
}
