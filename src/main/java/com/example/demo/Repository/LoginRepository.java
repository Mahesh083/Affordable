package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.LoginEntity;

public interface LoginRepository extends JpaRepository<LoginEntity,String>{

	
  
}