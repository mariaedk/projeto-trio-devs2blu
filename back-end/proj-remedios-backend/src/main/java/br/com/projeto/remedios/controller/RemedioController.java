package br.com.projeto.remedios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.remedios.dto.RemedioDTO;
import br.com.projeto.remedios.service.RemedioService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/remedio")
public class RemedioController {

	@Autowired
	RemedioService service;

	@GetMapping
	public List<RemedioDTO> getAll() {
		return service.findByOrderByNome();
	}

	@GetMapping("/{id}")
	public RemedioDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@PostMapping
	public ResponseEntity<RemedioDTO> addRemedio(@RequestBody RemedioDTO remedio) {
		return new ResponseEntity<>(service.add(remedio), HttpStatus.CREATED);
	}

	@PutMapping
	public ResponseEntity<RemedioDTO> update(@RequestBody RemedioDTO remedio) throws Exception {
		return new ResponseEntity<>(service.update(remedio), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delRemedio(@PathVariable("id") Integer id) throws Exception {
		return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
	}

}
