package dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import models.Beacon;
import models.IndoorMap;

import com.avaje.ebean.Model;
import com.fasterxml.jackson.annotation.JsonProperty;


public class BeaconDto  {

	public Long id;
	


	
	@JsonProperty("uuid")
	public String uuid;

	public int xCord;
	
	public int yCord;
	
	public String name;
	
	public String major;
	
	public String minor;
	
	public Long indoorMapId;
	
	

	public Beacon toModel(){
		Beacon model = new Beacon();
		model.setId(this.getId());
		model.setUuid(this.getUuid());
		model.setIndoorMapId(this.indoorMapId);
		model.setxCord(this.xCord);
		model.setyCord(this.yCord);
		
		
		
		return model;
	}
	
	
	


	@Override
	public String toString() {
		return "BeaconDto [id=" + id + ", uuid=" + uuid + ", xCord=" + xCord
				+ ", yCord=" + yCord + ", name=" + name + ", major=" + major
				+ ", minor=" + minor + ", indoorMapId=" + indoorMapId + "]";
	}





	public Long getId() {
		return id;
	}





	public void setId(Long id) {
		this.id = id;
	}





	public String getUuid() {
		return uuid;
	}





	public void setUuid(String uuid) {
		this.uuid = uuid;
	}





	public int getxCord() {
		return xCord;
	}





	public void setxCord(int xCord) {
		this.xCord = xCord;
	}





	public int getyCord() {
		return yCord;
	}





	public void setyCord(int yCord) {
		this.yCord = yCord;
	}





	public String getName() {
		return name;
	}





	public void setName(String name) {
		this.name = name;
	}





	public String getMajor() {
		return major;
	}





	public void setMajor(String major) {
		this.major = major;
	}





	public String getMinor() {
		return minor;
	}





	public void setMinor(String minor) {
		this.minor = minor;
	}





	public Long getIndoorMapId() {
		return indoorMapId;
	}





	public void setIndoorMapId(Long indoorMapId) {
		this.indoorMapId = indoorMapId;
	}

	

	
	

	
	
}
