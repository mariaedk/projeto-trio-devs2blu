package br.com.projeto.remedios.dto;

import java.io.Serializable;

import br.com.projeto.remedios.entity.Paciente;

public class PacienteDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer idPaciente;
	private String telefonePaciente;
	private String nomePaciente;
	private String generoPaciente;
	private RemedioDTO remedioDto;

	public Paciente convertToEntity() {
		return new Paciente(getIdPaciente(), getTelefonePaciente(), getNomePaciente(), getGeneroPaciente(),
				getRemedioDto().convertToEntity());
	}

	public PacienteDTO() {
		super();
	}

	public PacienteDTO(Integer idPaciente, String telefonePaciente, String nomePaciente, String generoPaciente,
			RemedioDTO remedioDto) {
		super();
		this.idPaciente = idPaciente;
		this.telefonePaciente = telefonePaciente;
		this.nomePaciente = nomePaciente;
		this.generoPaciente = generoPaciente;
		this.remedioDto = remedioDto;
	}

	public String getTelefonePaciente() {
		return telefonePaciente;
	}

	public void setTelefonePaciente(String telefonePaciente) {
		this.telefonePaciente = telefonePaciente;
	}

	public Integer getIdPaciente() {
		return idPaciente;
	}

	public void setIdPaciente(Integer idPaciente) {
		this.idPaciente = idPaciente;
	}

	public String getNomePaciente() {
		return nomePaciente;
	}

	public void setNomePaciente(String nomePaciente) {
		this.nomePaciente = nomePaciente;
	}

	public String getGeneroPaciente() {
		return generoPaciente;
	}

	public void setGeneroPaciente(String generoPaciente) {
		this.generoPaciente = generoPaciente;
	}

	public RemedioDTO getRemedioDto() {
		return remedioDto;
	}

	public void setRemedioDto(RemedioDTO remedioDto) {
		this.remedioDto = remedioDto;
	}

}
