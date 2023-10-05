package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.UserA;

public interface AdminUserRepository extends JpaRepository<UserA, Long> {}