package com.example.demo.entity;

//import java.util.List;
//import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
public class Admin {
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(name="id")
	    
	    private Long id;
	    @NotNull(message = "username name can not be empty")
		@Size(max = 20,message = "username name can't be more than 20 characters")
		@Size(min=5, message="username name must be more than 5 characters")
		@Column(name="username")
        
	    private String username;
	    @NotNull(message = "password name can not be empty")
	    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$",
        message = "Password must contain at least one uppercase letter, one lowercase letter, and one digit")
		@Size(max = 20,message = "password name can't be more than 20 characters")
		@Size(min=5, message="password name must be more than 5 characters")
		@Column(name="password")
	    
	    private String password;

	    @NotNull(message = "user_role name can not be empty")
	    @Column(name="user_role")
	    private String user_role;
	   /* @NotNull(message = "add_vechile_id name can not be empty")
		@Size(max = 20,message = "add_vechile_id name can't be more than 20 characters")
		@Size(min=1, message="add_vechile_id name must be more than 5 characters")
		@Column(name="add_vechile_id")*/
	    
//	    private String add_vechile_id;
	    
	    /*@OneToMany(mappedBy = "admin")
	    private Set<User>users;
	    */
	   
	    public Admin()
	    {
	    	
	    }
		public Admin(Long id, String username, String password,String add_vechile_id, String user_role) {
			super();
			this.id = id;
			this.username = username;
			this.password = password;
			this.user_role = user_role;
			//this.add_vechile_id=add_vechile_id;
		}
//		public String getAdd_vechile_id() {
//			return add_vechile_id;
//		}
//		public void setAdd_vechile_id(String add_vechile_id) {
//			this.add_vechile_id = add_vechile_id;
//		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
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
		public String getUserRole() {
			return user_role;
		}
		public void setUserRole(String user_role) {
			this.user_role = user_role;
		}
		@Override
		public String toString() {
			return "Admin [id=" + id + ", username=" + username + ", password=" + password + ", user_role=" + user_role
					+ "]";
		}
		

	    
}
