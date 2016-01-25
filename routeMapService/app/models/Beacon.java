package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.avaje.ebean.Model;
import com.fasterxml.jackson.annotation.JsonProperty;

import dto.BeaconDto;
import dto.RouteDto;

@Entity
public class Beacon extends Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	


	
	@JsonProperty("uuid")
	public String uuid;

	public int xCord;
	
	public int yCord;
	
	public String name;
	
	public String major;
	
	public String minor;
	
	public Long indoorMapId;
	

	

	public BeaconDto getDto(){
		BeaconDto dto = new BeaconDto();
		dto.setId(this.getId());
		dto.setUuid(this.uuid);
		dto.setIndoorMapId(this.getIndoorMapId());
		dto.setName(this.name);
		dto.setxCord(this.xCord);
		dto.setyCord(this.yCord);
		
		return dto;
	}
	
	
	
	public static final Find<Long,Beacon> find = new Find<Long,Beacon>(){};
	
	public static void save(Beacon b) {
		b.save();
	}
	
	public  void delete(Long id ) {
		getFind().deleteById(id);
	}
	
	
	public static Beacon get(Long id) {
		return Beacon.find.byId(id);		
	}
	
	public static List<Beacon> getByMapId(Long id) {
		return Beacon.find.where().eq("INDOOR_MAP_ID",id).findList();		
	}
	
	public static List<Beacon> list() {
		return Beacon.find.select("id, uuid, xCord, yCord").findList();
	}

	@Override
	public String toString() {
		return "Beacon [id=" + id + ", uuid=" + uuid + ", xCord=" + xCord
				+ ", yCord=" + yCord + ", name=" + name + ", major=" + major
				+ ", minor=" + minor + ", indoorMapId=" + indoorMapId
				+  "]";
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

	

	public static Find<Long, Beacon> getFind() {
		return find;
	}

	
	
}
