package com.example.pjto.dto;

import java.util.Objects;


public class TradutorDTO {
	private Long id;
	private String name;
	private String email;
	private String cont;
	
	public TradutorDTO() {
		
	}

	public TradutorDTO(Long id, String name, String email,String cont) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.cont = cont;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCont() {
		return cont;
	}

	public void setCont(String cont) {
		this.cont = cont;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, email, cont);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TradutorDTO other = (TradutorDTO) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name) && Objects.equals(email, other.email) && Objects.equals(cont, other.cont);
	}

	@Override
	public String toString() {
		return "TradutorDTO [id=" + id + ", nome=" + name + ", email=" + email + ",cont=" + cont +" ]";
	}
	
	

}


