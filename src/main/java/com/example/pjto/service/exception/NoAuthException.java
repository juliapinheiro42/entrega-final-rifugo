package com.example.pjto.service.exception;

public class NoAuthException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NoAuthException(String msg) {
		super(msg);
	}
}
