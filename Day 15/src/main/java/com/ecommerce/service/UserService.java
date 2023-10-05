package com.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.entity.UserA;
import com.ecommerce.repository.AdminUserRepository;
@Service
public class UserService {
	@Autowired
    AdminUserRepository userRepository;
	public List<UserA> getAllUsers(){
		return userRepository.findAll();
	}
	public Optional<UserA> getUserById(Long id) {
		return userRepository.findById(id);
	}
	public UserA addUser(UserA user) {
		return userRepository.save(user);
	}
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	public UserA updateUser(UserA user) {
		return userRepository.save(user);
	}
}
