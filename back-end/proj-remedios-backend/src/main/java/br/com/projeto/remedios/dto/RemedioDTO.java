package br.com.projeto.remedios.dto;

import java.io.Serializable;
import java.util.Date;

import br.com.projeto.remedios.entity.Remedio;

public class RemedioDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer idRemedio;
	private String nomeRemedio;
	private String statusRemedioUso;
	private Date deadLineRemedio;
	private Date createdAtRemedio;

	public RemedioDTO() {
	}

	public RemedioDTO(Integer idRemedio, String nomeRemedio, String statusRemedioUso, Date deadLineRemedio,
			Date createdAtRemedio) {
		super();
		this.idRemedio = idRemedio;
		this.nomeRemedio = nomeRemedio;
		this.statusRemedioUso = statusRemedioUso;
		this.deadLineRemedio = deadLineRemedio;
		this.createdAtRemedio = createdAtRemedio;
	}

	public Remedio convertToEntity() {
		return new Remedio(getIdRemedio(), getNomeRemedio(), getStatusRemedioUso(), getDeadLineRemedio(), getCreatedAtRemedio());
	}

	public Integer getIdRemedio() {
		return idRemedio;
	}

	public void setIdRemedio(Integer idRemedio) {
		this.idRemedio = idRemedio;
	}

	public String getNomeRemedio() {
		return nomeRemedio;
	}

	public void setNomeRemedio(String nomeRemedio) {
		this.nomeRemedio = nomeRemedio;
	}

	public String getStatusRemedioUso() {
		return statusRemedioUso;
	}

	public void setStatusRemedioUso(String statusRemedioUso) {
		this.statusRemedioUso = statusRemedioUso;
	}

	public Date getDeadLineRemedio() {
		return deadLineRemedio;
	}

	public void setDeadLineRemedio(Date deadLineRemedio) {
		this.deadLineRemedio = deadLineRemedio;
	}

	public Date getCreatedAtRemedio() {
		return createdAtRemedio;
	}

	public void setCreatedAtRemedio(Date createdAtRemedio) {
		this.createdAtRemedio = createdAtRemedio;
	}

}
