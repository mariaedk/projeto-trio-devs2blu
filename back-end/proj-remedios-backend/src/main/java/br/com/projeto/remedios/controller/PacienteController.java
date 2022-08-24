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

import br.com.projeto.remedios.dto.PacienteDTO;
import br.com.projeto.remedios.service.PacienteService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/paciente")
public class PacienteController {

	@Autowired
	PacienteService service;

	@GetMapping
	public List<PacienteDTO> getAll() {
		return service.findByOrderByNome();
	}
	
	@GetMapping("/{id}")
	public PacienteDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@PostMapping
	public ResponseEntity<PacienteDTO> addPaciente(@RequestBody PacienteDTO paciente) {
		return new ResponseEntity<>(service.add(paciente), HttpStatus.CREATED);
	}

	@PutMapping
	public ResponseEntity<PacienteDTO> update(@RequestBody PacienteDTO paciente) throws Exception {
		return new ResponseEntity<>(service.update(paciente), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delPaciente(@PathVariable("id") Integer id) throws Exception {
		return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
	}
	
	@GetMapping("/status/{statusRemedioUso}")
	public List<PacienteDTO> getAllByStatus(@PathVariable("statusRemedioUso") String statusRemedioUso) throws Exception
	{
		return service.getPacienteByStatus(statusRemedioUso);
	}
}
