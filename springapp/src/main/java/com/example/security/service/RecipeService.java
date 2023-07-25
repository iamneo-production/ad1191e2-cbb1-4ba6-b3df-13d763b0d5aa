package com.example.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.example.security.entity.RecipeEntity;
import com.example.security.repository.RecipeRepository;



@org.springframework.stereotype.Service
public class RecipeService {
	@Autowired(required=true)
	RecipeRepository Re;
	public RecipeEntity saveDetails(RecipeEntity e)
	{
		return Re.save(e);
	}
	public List<RecipeEntity> getDetails(){
		return Re.findAll();
	} 
	public RecipeEntity updateDetails(RecipeEntity e) {
		return Re.saveAndFlush(e);
	}
	public void deleteDetails(String recipename) {
		Re.deleteById(recipename);
		
	}
}