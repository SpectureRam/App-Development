package com.ecommercewebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommercewebsite.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {}