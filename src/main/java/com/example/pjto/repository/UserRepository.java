package com.example.pjto.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pjto.model.entity.User;



public interface UserRepository extends JpaRepository<User, Long> {

	
	boolean existsByEmail(String email);
	
	Optional<User> findByEmail( String email);
}