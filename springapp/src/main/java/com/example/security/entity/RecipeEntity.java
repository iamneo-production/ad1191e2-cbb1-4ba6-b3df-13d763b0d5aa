package com.example.security.entity;

import jakarta.persistence.Column;

import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name="NewRecipe")
public class RecipeEntity {
	@Id
	@Column(name="RecipeName") 
	private String recipename;
	
	@Column(name="ImageURL",length = 15000) 
	private String imageurl;
	
	@Column(name="Ingredients")
	private String ingredients;
	
	@Column(name="TipsAndTechnique")
	private String tipsandtechnique;
	
	
	public String getRecipename() {
		return recipename;
	}
	public void setRecipename(String recipename) {
		this.recipename = recipename;
	}
	public String getImageurl() {
		return imageurl;
	}
	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
	public String getTipsandtechnique() {
		return tipsandtechnique;
	}
	public void setTipsandtechnique(String tipsandtechnique) {
		this.tipsandtechnique = tipsandtechnique;
	}
	public RecipeEntity(String recipename, String imageurl, String ingredients, String tipsandtechnique) {
		super();
		this.recipename = recipename;
		this.imageurl = imageurl;
		this.ingredients = ingredients;
		this.tipsandtechnique = tipsandtechnique;
	}
	public RecipeEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}