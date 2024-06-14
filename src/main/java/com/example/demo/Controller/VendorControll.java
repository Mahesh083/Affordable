package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.VendorEntity;
import com.example.demo.Services.Servicess;




@CrossOrigin
@RestController
public class VendorControll {
@Autowired
Servicess employeeService;
@PostMapping("/addproducts")
public boolean addEmployee(@RequestBody VendorEntity employee)
{
return employeeService.addEmployee(employee);
}
@GetMapping("/getproducts")
public List <VendorEntity> getAllEmployees()
{
return employeeService.getAllEmployees();
}

@DeleteMapping("/deleteproducts/{id}")
public String deleteCarts(@PathVariable int id) {
	return employeeService.deleteCart(id);
}

}