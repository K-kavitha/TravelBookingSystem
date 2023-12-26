package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserRepository;
import com.example.demo.entity.User;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    UserRepository dao;
    @Override
    public void addUser(User user) {
        
        this.dao.save(user);
        
    }
        @Override
        public List<User> findALL() {
            // TODO Auto-generated method stub
            return dao.findAll();
        }
        @Override
        public Optional<User> findUserById(int id) {
            // TODO Auto-generated method stub
            return this.dao.findById(id);
        }

        @Override
        public void updateUser(User user) {
            this.dao.save(user);
            
        }
        @Override
        public void deleteById(int id) {
            dao.deleteById(id);
            
        }
        @Override
		public Optional<User> getUserByName(String username) {
			
			return this.dao.findByusername(username);
			
		}
		@Override
		public User findByUsername(String username) {
			// TODO Auto-generated method stub
			return dao.findByUsername(username);
		}
		 public boolean isValidGmailAddress(String email_id) {
		        String gmailPattern = "\\b[A-Za-z0-9._%+-]+@gmail\\.com\\b";
		        return email_id.matches(gmailPattern);
		    }

}