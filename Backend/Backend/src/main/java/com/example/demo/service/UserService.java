package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.User;

public interface UserService {
	public void addUser(User user);
	public List<User>findALL();
	
	public void updateUser(User user);
	public void deleteById(int id);
	public Optional<User> getUserByName(String username);
	User findByUsername(String username);
	public boolean isValidGmailAddress(String email_id);
	public List<User> findByusername(String username);
	
	public Optional<User> findUserById(int userid);
	User getUserByUsername(String username);

}