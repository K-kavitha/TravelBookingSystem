package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
@Table(name="user")
public class User
{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="userid")
    private int userid;
    @NotNull(message = "first name can not be empty")
    @Size(max = 20,message = "first name can't be more than 20 characters")
    @Size(min=2, message="first name must be more than 5 characters")
    @Column(name="first_name")

    private String first_name;
    @NotNull(message = "last_name can not be empty")
    @Size(max = 20,message = "last_name can't be more than 20 characters")
    @Size(min=1, message="last_name must be more than 5 characters")
    @Column(name="last_name")

    private String last_name;
    @Size(max = 20,message = "username can't be more than 20 characters")
    @Size(min=2, message="username must be more than 5 characters") @NotNull(message = "username can not be empty")

    private String username;
    @NotNull(message = "password can not be empty")

    @Size(min = 5, max =20,message = "password must be between 8 to 20 characters long.")
    @Column(name="password")

    private String password;
    @Column(name="email_id")

    @NotNull(message = "Email can not be empty")
   
    private String email_id;
	public User()
    {
        
    }
    public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public User(int userid, String first_name, String last_name, String username, String password) {
        super();
        this.userid = userid;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
    }
    public int getUserid() {
        return userid;
    }
    public void setUserid(int userid) {
        this.userid = userid;
    }
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    

}