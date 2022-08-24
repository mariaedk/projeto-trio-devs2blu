package br.com.projeto.remedios.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import br.com.projeto.remedios.dto.PacienteDTO;

@Entity
public class Paciente {

	public Paciente() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 20)
	private String telefone;

	@Column(length = 45, nullable = false)
	private String nome;

	@Column(length = 20, nullable = false)
	private String genero;

	@ManyToOne
	@JoinColumn(name = "id_remedio")
	private Remedio remedio;

	public Paciente(Integer id, String telefone, String nome, String genero, Remedio remedio) {
		super();
		this.id = id;
		this.telefone = telefone;
		this.nome = nome;
		this.genero = genero;
		this.remedio = remedio;
	}

	public PacienteDTO getDTO() {
		return new PacienteDTO(getId(), getTelefone(), getNome(), getGenero(), getRemedio().getDTO());
	}

	public Remedio getRemedio() {
		return remedio;
	}

	public void setRemedio(Remedio remedio) {
		this.remedio = remedio;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

}
