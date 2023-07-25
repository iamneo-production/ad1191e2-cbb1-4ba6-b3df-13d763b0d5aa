package com.example.security.controller;

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

import com.example.security.entity.RecipeEntity;
import com.example.security.service.RecipeService;



@RestController
@CrossOrigin()
public class RecipeController {
	@Autowired
	RecipeService ser;
	
	@PostMapping("/addRecipe") 
	public RecipeEntity addinfo(@RequestBody RecipeEntity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/showRecipe")
	public List<RecipeEntity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/updateRecipe")
		public RecipeEntity updateInfo(@RequestBody RecipeEntity st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/deleteRecipe/{recipename}")
	 String deleteInfo(@PathVariable("recipename") String recipename){
		ser.deleteDetails(recipename);
		return "Deleted the data";
	}
//	
}