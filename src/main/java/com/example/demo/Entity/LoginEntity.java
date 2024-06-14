package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Form")
public class LoginEntity {
	@Id
	@Column(name="UserName") 
	private String username;
	@Column(name="Password")
	private String Password;
	


	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
    public String getPassword() {
		return Password;
	}
     public void setPassword(String password) {
		Password = password;
	}
     
    public LoginEntity(String username, String password) {
		super();
		this.username = username;
		Password = password;
	}
	public LoginEntity() {
    	 
     }



	
	
	
}
	
	


