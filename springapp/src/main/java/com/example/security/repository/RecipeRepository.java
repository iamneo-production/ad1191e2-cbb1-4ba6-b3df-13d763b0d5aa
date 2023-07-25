package com.example.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.security.entity.RecipeEntity;

public interface RecipeRepository extends JpaRepository<RecipeEntity,String>{

	
  
}