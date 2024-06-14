package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.LoginEntity;
import com.example.demo.Repository.LoginRepository;




@Service
public class LoginService {
	@Autowired(required=true)
	LoginRepository Re;
	public LoginEntity saveDetails(LoginEntity e)
	{
		return Re.save(e);
	}
	public List<LoginEntity> getDetails(){
		return Re.findAll();
	} 
	public LoginEntity updateDetails(LoginEntity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String username) {
		Re.deleteById(username);
		
	}
}