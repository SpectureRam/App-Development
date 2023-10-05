package com.ecommerce.entity;

import jakarta.persistence.*;
@Entity
@Table(name = "user_details")
public class UserA {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private long userId;
	@Column(name="email_id")
	private String emailId;
	@Column(name="user_name")
	private String userName;
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public UserA(long userId, String emailId, String userName) {
		super();
		this.userId = userId;
		this.emailId = emailId;
		this.userName = userName;
	}
	public UserA() {
		//Do nothing
	}
	
}