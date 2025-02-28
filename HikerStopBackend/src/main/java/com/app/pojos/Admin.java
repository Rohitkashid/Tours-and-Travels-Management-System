package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Admin {

	@Id
	private String userid; 
	
	
	private String pwd;
	
	
	private String name;
	@Column(nullable = false)
	private String role = "Admin";
	
	
	
}