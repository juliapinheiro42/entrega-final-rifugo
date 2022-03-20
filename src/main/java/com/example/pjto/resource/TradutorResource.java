package com.example.pjto.resource;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.pjto.dto.TradutorDTO;
import com.example.pjto.model.entity.Tradutor;
import com.example.pjto.service.TradutorService;
import com.example.pjto.service.exception.ValidateException;

@RestController
@RequestMapping("/api/tradutor")
public class TradutorResource { 
	
 private TradutorService service;
 
 public TradutorResource (TradutorService service) {
	 this.service = service;
 }
  @GetMapping
 public ResponseEntity search(
@RequestParam(value="name", required= false)String name,
@RequestParam(value="email", required= false)String email,
@RequestParam(value="cont", required= false)String cont
) {
		Tradutor tradutorFilter = new Tradutor();
		tradutorFilter.setName(name);
		tradutorFilter.setEmail(email);
		tradutorFilter.setCont(cont);
		
		List<Tradutor> tradutor = service.search(tradutorFilter);
		return ResponseEntity.ok(tradutor);
		 	 }
  @PostMapping
  public ResponseEntity save (@RequestBody TradutorDTO dto) {
	  try {
		  Tradutor entity = converter(dto);
		  entity = service.save(entity);
		  return ResponseEntity.ok(entity);
	  }
	  catch(ValidateException e) {
		  return ResponseEntity.badRequest().body(null);
	  }
  }
  @PutMapping("/{id}")
  public ResponseEntity update(@PathVariable Long id, @RequestBody TradutorDTO dto) {
	  return service.obterPorId(id).map(entity ->{
		  try {
			  Tradutor tradutor =converter(dto);
			  tradutor.setId(entity.getId());
			  service.update(tradutor);
			  return ResponseEntity.ok(tradutor);
		  }
		  catch(Exception e) {
			  return ResponseEntity.badRequest().body(null);
		  }
	  }).orElseGet(() -> new ResponseEntity("Tradutor não encontrado",HttpStatus.BAD_REQUEST));
			  
  }
  @DeleteMapping("/{id}")
  public ResponseEntity delete (@PathVariable("id") Long id) {
	  return service.obterPorId(id).map(entity ->{
		  service.delete(entity);
		  return new ResponseEntity(HttpStatus.NO_CONTENT);
	  }).orElseGet(() -> new ResponseEntity("Tradutor não encontrado",HttpStatus.BAD_REQUEST));
			  
  }
  private Tradutor converter(TradutorDTO dto) {
	  Tradutor tradutor = new Tradutor();
	  tradutor.setName(dto.getName());
	  tradutor.setEmail(dto.getEmail());
	  tradutor.setCont(dto.getCont());
	  
	  return tradutor;
  }
 
}


