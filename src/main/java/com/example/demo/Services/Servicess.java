package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.VendorEntity;
import com.example.demo.Repository.VendorRepository;

@Service
public class Servicess {
@Autowired
public VendorRepository employeeRepo;
public boolean addEmployee(VendorEntity employee)
{
return employeeRepo.save(employee)!=null?true:false;
}
public List <VendorEntity> getAllEmployees()
{
return employeeRepo.findAll();
}

public String deleteCart(int id) {
	employeeRepo.deleteById(id);
	return "Delete the item "+id;
}
}
