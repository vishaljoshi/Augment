package models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Transient;

import play.data.validation.Constraints;

import com.avaje.ebean.Model;

import dto.BeaconDto;
import dto.IndoorMapDto;
import dto.RouteDto;


@Entity
@Table(name = "INDOOR_MAP")
public class IndoorMap extends Model {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
	public Long id;
	
	@Constraints.Required
	public Long lengthInPixels;
	
	@Constraints.Required
	public Long widthInPixels;
	
	@Constraints.Required
	public Long scale;

	@Constraints.Required
	public String mapName;
	
	public String fileName;	
	public String fileType;	
	
	@Lob
	public byte[] image;
	

	@Transient
	public  List<Beacon> beacons;
	
	@Transient
	public  List<Route> routes;
	
	public IndoorMap(){
		
	}
	
	public IndoorMapDto copyToDto(){
		this.beacons.size();
		this.beacons.get(0);
		IndoorMapDto dto = new IndoorMapDto();
		dto.setId(this.getId());
		dto.setMapName(this.getMapName());
		dto.setImage(this.getImage());
		List beaconList = new ArrayList();
		List routeList = new ArrayList();
		for (Beacon beacon : this.beacons) {
			beaconList.add(beacon.getDto());
		}
		for (Route route : this.routes) {
			routeList.add(route.getDto());
		}
	
		
		
		dto.setBeacons(beaconList);
		dto.setRoutes(routeList);
		
		return dto;
	}
	
	public static final Find<Long,IndoorMap> find = new Find<Long,IndoorMap>(){};

	
	public  void saveMap() {
		this.save();
		System.out.println("beacons===>"+ this.beacons.size());
		for(int i=0;i<this.beacons.size();i++) {
			Beacon beacon = this.beacons.get(i);
			beacon.setIndoorMapId(this.getId());
			beacon.save();
		}
		for (Route route : this.routes) {
			route.setIndoorMapId(this.getId());
			route.save();
		}
	}
	
	public  void deleteMap() {
		getFind().deleteById(id);
		System.out.println("beacons===>"+ this.beacons.size());
		List<Beacon> beaconList = Beacon.getByMapId(this.id);
		List<Route> routeList = Route.getByMapId(this.id);
		for (Beacon beacon: beaconList) {
			
			beacon.delete();
		}
		for (Route route : routeList) {
			
			route.delete();
		}
	}
	
	
	public static List<IndoorMap> list() {
		return IndoorMap.find.select("id, name, description, lengthInPixels, widthInPixels, scale").findList();
	}
	
	public static IndoorMap get(Long id) {
		IndoorMap map = IndoorMap.find.byId(id);
		if(map!=null){
			List beacons = new ArrayList<Beacon>();
			beacons.addAll(Beacon.getByMapId(id));
			map.beacons = beacons;
			
			List routes = new ArrayList<Route>();
			routes.addAll(Route.getByMapId(id));		
			map.routes = routes;
		}
		
		return 	map;
	}


	@Override
	public String toString() {
		return "IndoorMap [id=" + id + ", lengthInPixels=" + lengthInPixels
				+ ", widthInPixels=" + widthInPixels + ", scale=" + scale
				+ ", mapName=" + mapName + ", fileName=" + fileName
				+ ", fileType=" + fileType + ", image="
				+ image+ ", beacons=" + beacons + ", routes="
				+ routes + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getLengthInPixels() {
		return lengthInPixels;
	}

	public void setLengthInPixels(Long lengthInPixels) {
		this.lengthInPixels = lengthInPixels;
	}

	public Long getWidthInPixels() {
		return widthInPixels;
	}

	public void setWidthInPixels(Long widthInPixels) {
		this.widthInPixels = widthInPixels;
	}

	public Long getScale() {
		return scale;
	}

	public void setScale(Long scale) {
		this.scale = scale;
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

	public List<Beacon> getBeacons() {
		return beacons;
	}

	public void setBeacons(List beacons) {
		this.beacons = beacons;
	}

	public List<Route> getRoutes() {
		return routes;
	}

	public void setRoutes(List routes) {
		this.routes = routes;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public static Find<Long, IndoorMap> getFind() {
		return find;
	}


	
}
