package br.com.projeto.remedios.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import br.com.projeto.remedios.dto.RemedioDTO;

@Entity
public class Remedio {

	public Remedio() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 50, nullable = false)
	private String nome;

	/**
	 * U - Medicamento em uso 
	 * P - Medicamento pausado 
	 * F - Medicamento finalizado 
	 * I - Medicamento interrompido
	 */
	@Column(length = 1)
	private String statusRemedio;
	
	@Column(nullable = false)
    private Date deadLine;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

	public RemedioDTO getDTO() {
		return new RemedioDTO(getId(), getNome(), getStatusRemedio(), getDeadLine(), getCreatedAt());
	}

	public Remedio(Integer id, String nome, String statusRemedio, Date deadLine, Date createdAt) {
		super();
		this.id = id;
		this.nome = nome;
		this.statusRemedio = statusRemedio;
		this.deadLine = deadLine;
		this.createdAt = createdAt;
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

	public String getStatusRemedio() {
		return statusRemedio;
	}

	public void setStatusRemedio(String statusRemedio) {
		this.statusRemedio = statusRemedio;
	}

	public Date getDeadLine() {
		return deadLine;
	}

	public void setDeadLine(Date deadLine) {
		this.deadLine = deadLine;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
	
	