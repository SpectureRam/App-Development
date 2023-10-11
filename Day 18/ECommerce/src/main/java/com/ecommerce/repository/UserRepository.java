package com.ecommerce.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.entity.User;
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String username);
}