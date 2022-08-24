package br.com.projeto.remedios.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projeto.remedios.dto.PacienteDTO;
import br.com.projeto.remedios.dto.RemedioDTO;
import br.com.projeto.remedios.entity.Paciente;
import br.com.projeto.remedios.entity.Remedio;
import br.com.projeto.remedios.repository.RemedioRepository;

@Service
public class RemedioService {

	@Autowired
	RemedioRepository repository;

	public RemedioDTO getById(Integer id) throws Exception {
		Remedio remedio = repository.findById(id).orElseThrow(() -> new Exception("Remedio não encontrado"));
		return remedio.getDTO();
	}

	public RemedioDTO add(RemedioDTO remedio) {
		return repository.save(remedio.convertToEntity()).getDTO();
	}

	public Boolean delete(Integer id) throws Exception {
		Remedio remedio = repository.findById(id).orElseThrow(() -> new Exception("Remedio não encontrado"));
		repository.delete(remedio);
		return true;
	}

	public RemedioDTO update(RemedioDTO remedio) throws Exception {
		getById(remedio.getIdRemedio());
		return add(remedio);
	}

	public List<RemedioDTO> findByOrderByNome() {
		List<Remedio> remedios = repository.findByOrderByNome();
		List<RemedioDTO> listaRemedioDTO = new ArrayList();

		for (Remedio remedio : remedios) {
			listaRemedioDTO.add(remedio.getDTO());
		}
		return listaRemedioDTO;
	}

}
