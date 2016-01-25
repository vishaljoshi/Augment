package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.avaje.ebean.Model;

import dto.RouteDto;

@Entity
public class Route extends Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	
	public int startx;
	public int starty;
	

	public int endx;
	public int endy;

	public Long indoorMapId;
	
	
	
	
	public RouteDto getDto(){
		RouteDto dto = new RouteDto();
		dto.setId(this.getId());
		dto.setIndoorMapId(this.getIndoorMapId());
		
		dto.setStartx(this.startx);
		dto.setStarty(this.starty);
		dto.setEndx(this.endx);
		dto.setEndy(this.endy);
		return dto;
	}
	
	public static final Find<Long,Route> find = new Find<Long,Route>(){};
	
	
	public static Route get(Long id) {
		return Route.find.byId(id);		
	}
	

	public  void  delete(Long id) {
		getFind().deleteById(id);		
	}
	
	public static List<Route> getByMapId(Long id) {
		return Route.find.where().eq("INDOOR_MAP_ID",id).findList();		
	}
	
	public static List<Route> list() {
		return Route.find.select("id, uuid, xCord, yCord").findList();
	}

	@Override
	public String toString() {
		return "Route [id=" + id + ", startx=" + startx + ", starty=" + starty
				+ ", endx=" + endx + ", endy=" + endy + ", indoorMapId="
				+ indoorMapId + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getStartx() {
		return startx;
	}

	public void setStartx(int startx) {
		this.startx = startx;
	}

	public int getStarty() {
		return starty;
	}

	public void setStarty(int starty) {
		this.starty = starty;
	}

	public int getEndx() {
		return endx;
	}

	public void setEndx(int endx) {
		this.endx = endx;
	}

	public int getEndy() {
		return endy;
	}

	public void setEndy(int endy) {
		this.endy = endy;
	}

	public Long getIndoorMapId() {
		return indoorMapId;
	}

	public void setIndoorMapId(Long indoorMapId) {
		this.indoorMapId = indoorMapId;
	}

	

	public static Find<Long, Route> getFind() {
		return find;
	}
	
}
