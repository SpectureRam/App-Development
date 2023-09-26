package com.ecommercewebsite.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommercewebsite.entity.User;
import com.ecommercewebsite.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	public Optional<User> getUserById(Long id) {
		return userRepository.findById(id);
	}
	public User addUser(User user) {
		return userRepository.save(user);
	}
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	public User updateUser(User user) {
		return userRepository.save(user);
	}
}
