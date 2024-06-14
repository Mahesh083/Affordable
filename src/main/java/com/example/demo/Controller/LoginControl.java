package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.LoginEntity;
import com.example.demo.Services.LoginService;




@RestController
@CrossOrigin
public class LoginControl {
	@Autowired
	LoginService ser;
	
	@PostMapping("/post") 
	public LoginEntity addinfo(@RequestBody LoginEntity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/get")
	public List<LoginEntity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/put")
		public LoginEntity updateInfo(@RequestBody LoginEntity st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/delete/{username}")
	 String deleteInfo(@PathVariable("username") String username) {
		ser.deleteDetails(username);
		return "Deleted the data";
	}
//	
}