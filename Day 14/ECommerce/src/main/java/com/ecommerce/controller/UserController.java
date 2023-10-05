package com.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.UserA;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<List<UserA>> getAllUsers(){
		List<UserA> getUser = userService.getAllUsers();
		return new ResponseEntity<>(getUser,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UserA> getUserById(@PathVariable long id){
		Optional<UserA> user = userService.getUserById(id);
		return user.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
			.orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping
	public ResponseEntity<UserA> addUser(@RequestBody UserA user){
		UserA addedUser = userService.addUser(user);
		return new ResponseEntity<>(addedUser,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id){
		Optional<UserA> existingUser = userService.getUserById(id);
		if(existingUser.isPresent()) {
			userService.deleteUser(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/{id}")
	public ResponseEntity<UserA> updateUser(@PathVariable Long id, @RequestBody UserA user){
		Optional<UserA> existingUser = userService.getUserById(id);
		if(existingUser.isPresent()) {
			user.setUserId(id);
			UserA updatedUser = userService.updateUser(user);
			return new ResponseEntity<>(updatedUser,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
}