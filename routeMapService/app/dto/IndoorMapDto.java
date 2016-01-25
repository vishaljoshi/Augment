package dto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import models.Beacon;
import models.IndoorMap;
import models.Route;
import play.data.validation.Constraints;

import com.avaje.ebean.Model;



public class IndoorMapDto  {

	private static final long serialVersionUID = 1L;
	

	public Long id;  
	
	
	
	

	
	public String mapName;
	
	public String fileName;	
	public String fileType;	
	
	@Lob
	public byte[] image;
	

	public  List<BeaconDto> beacons;
	
	public  List<RouteDto> routes;
	
	public IndoorMap toModel(){
		IndoorMap model = new IndoorMap();
		model.setId(this.getId());
		model.setMapName(this.getMapName());
		model.setImage(this.getImage());
		List beaconList = new ArrayList();
		List routeList = new ArrayList();
		for (BeaconDto beacon : this.beacons) {
			beaconList.add(beacon.toModel());
		}
		for (RouteDto route : this.routes) {
			routeList.add(route.toModel());
		}
	
		
		
		model.setBeacons(beaconList);
		model.setRoutes(routeList);
		
		return model;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMapName() {
		return mapName;
	}

	public void setMapName(String mapName) {
		this.mapName = mapName;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public List<BeaconDto> getBeacons() {
		return beacons;
	}

	public void setBeacons(List<BeaconDto> beacons) {
		this.beacons = beacons;
	}

	public List<RouteDto> getRoutes() {
		return routes;
	}

	public void setRoutes(List<RouteDto> routes) {
		this.routes = routes;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "IndoorMapDto [id=" + id + ", mapName=" + mapName
				+ ", fileName=" + fileName + ", fileType=" + fileType
				+ ", image=" + Arrays.toString(image) + ", beacons=" + beacons
				+ ", routes=" + routes + "]";
	}
	

	

	
}
