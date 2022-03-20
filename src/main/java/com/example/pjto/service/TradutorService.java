package com.example.pjto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.pjto.model.entity.Tradutor;


@Service
public interface TradutorService {
	Tradutor save(Tradutor tradutor);
    Tradutor update(Tradutor tradutor);
    void delete( Tradutor tradutor);
    List<Tradutor> search( Tradutor tradutorFilter ); 
	Optional<Tradutor> obterPorId(Long id);
}
