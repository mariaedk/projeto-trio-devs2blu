package br.com.projeto.remedios.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projeto.remedios.dto.PacienteDTO;
import br.com.projeto.remedios.entity.Paciente;
import br.com.projeto.remedios.repository.PacienteRepository;

@Service
public class PacienteService {

	@Autowired
	PacienteRepository repository;

	public PacienteDTO getById(Integer id) throws Exception {
		Paciente paciente = repository.findById(id).orElseThrow(() -> new Exception("Paciente não encontrado"));
		return paciente.getDTO();
	}

	public PacienteDTO add(PacienteDTO paciente) {
		return repository.save(paciente.convertToEntity()).getDTO();
	}

	public Boolean delete(Integer id) throws Exception {
		Paciente paciente = repository.findById(id).orElseThrow(() -> new Exception("Paciente não encontrado"));
		repository.delete(paciente);
		return true;
	}

	public PacienteDTO update(PacienteDTO paciente) throws Exception {
		getById(paciente.getIdPaciente());
		return add(paciente);
	}

	public List<PacienteDTO> findByOrderByNome() {
		List<Paciente> pacientes = repository.findByOrderByNome();
		List<PacienteDTO> listaPacienteDTO = new ArrayList();

		for (Paciente paciente : pacientes) {
			listaPacienteDTO.add(paciente.getDTO());
		}
		return listaPacienteDTO;
	}
	
	public List<PacienteDTO> getPacienteByStatus(String status)
	{
		List<PacienteDTO> listaPacienteDTO = this.findByOrderByNome();
		List<PacienteDTO> pacientesByStatus = new ArrayList<>();
		
		for(PacienteDTO pacienteDTO : listaPacienteDTO)
		{
			if (pacienteDTO.getRemedioDto().getStatusRemedioUso().equals(status))
			{
				pacientesByStatus.add(pacienteDTO);
			}
		}
		return pacientesByStatus;
	}

}
