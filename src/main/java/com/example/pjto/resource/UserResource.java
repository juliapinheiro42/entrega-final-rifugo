package com.example.pjto.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pjto.dto.UserDTO;
import com.example.pjto.model.entity.User;
import com.example.pjto.service.UserService;
import com.example.pjto.service.exception.NoAuthException;



@RestController
@RequestMapping("/api/users")
public class UserResource {
	
	private  UserService service;
	
	public UserResource( UserService service) {
		this.service = service;
	}
	
	@PostMapping("/auth")
	public ResponseEntity<?> auth(@RequestBody UserDTO dto) {
		try {
			User userAuth = service.autenticar(dto.getEmail(), dto.getPassword());
			
			
			return ResponseEntity.ok(userAuth );
		}
		catch(NoAuthException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}

	@PostMapping
	public ResponseEntity save( @RequestBody UserDTO dto) {
		
		User user = new User();
		user.setEmail(dto.getEmail());
		user.setName(dto.getName());
		user.setPassword(dto.getPassword());
		
		try {
			User userSave = service.saveUser(user);
			return new ResponseEntity(userSave, HttpStatus.CREATED);
		}
        catch (Exception e) {
        	return ResponseEntity.badRequest().body(e.getMessage());
        }
	}
	
}