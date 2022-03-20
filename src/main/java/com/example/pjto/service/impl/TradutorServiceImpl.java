package com.example.pjto.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.example.pjto.model.entity.Tradutor;
import com.example.pjto.repository.TradutorRepository;
import com.example.pjto.service.TradutorService;
@Service
public class TradutorServiceImpl implements TradutorService {
@Autowired
	private TradutorRepository repo;
	
	
	
	public TradutorServiceImpl(TradutorRepository repo) {
		this.repo = repo;
	}

	@Override
	@Transactional
	public Tradutor save(Tradutor tradutor) {
		
		return repo.save(tradutor);
	}

	@Override
	@Transactional
	public Tradutor update(Tradutor tradutor) {
		Objects.requireNonNull(tradutor.getId());
		return repo.save(tradutor);
	}

	@Override
	@Transactional
	public void delete(Tradutor tradutor) {
		Objects.requireNonNull(tradutor.getId());
		repo.delete(tradutor);
	}

	@Override
	@Transactional
	public List<Tradutor> search(Tradutor tradutorFilter) {
		Example example = Example.of(tradutorFilter, ExampleMatcher.matching()
				.withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));
		return repo.findAll(example);
	}

	@Override
	@Transactional
	public Optional<Tradutor> obterPorId(Long id) {
		return repo.findById(id);
	}

}
