package com.example.pjto.service;

import com.example.pjto.model.entity.User;

public interface UserService {
User autenticar(String email, String password);
	
	User saveUser(User user);
	
	void emailValidate(String email);
}
