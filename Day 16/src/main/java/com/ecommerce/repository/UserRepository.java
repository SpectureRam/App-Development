package com.ecommerce.repository;

import java.util.Optional;

import com.ecommerce.entity.UserA;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    UserA findByUid(Long uid);

    void deleteByUid(Long uid);

}