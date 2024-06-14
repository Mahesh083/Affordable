package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.example.demo.Entity.Model;
import com.example.demo.Repository.Repo;



@Service
public class Serve {
	@Autowired(required=true)
	Repo Re;
	public Model saveDetails(Model e)
	{
		return Re.save(e);
	}
	public List<Model> getDetails(){
		return Re.findAll();
	} 
	public Model updateDetails(Model e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String username) {
		Re.deleteById(username);
		
	}
}