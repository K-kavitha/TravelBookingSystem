package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.demo.entity.User;

public interface UserDao extends JpaRepository<User, Integer>
{
	User findByUsername(String username);
	@Query(value = "SELECT * FROM USER u WHERE u.username = ?",nativeQuery = true  )
	public User findByusername(String username);
}
