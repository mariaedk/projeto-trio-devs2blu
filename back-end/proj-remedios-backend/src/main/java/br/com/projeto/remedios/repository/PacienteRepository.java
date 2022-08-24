package br.com.projeto.remedios.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.projeto.remedios.entity.Paciente;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Integer> {

	public List<Paciente> findByOrderByNome();
	

}
