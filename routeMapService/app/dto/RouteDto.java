package dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import models.Beacon;
import models.Route;

import com.avaje.ebean.Model;


public class RouteDto  {

	
	public Long id;
	
	
	public int startx;
	public int starty;
	

	public int endx;
	public int endy;

	public Long indoorMapId;
	
	
	
	public Route toModel(){
		Route model = new Route();
		model.setId(this.getId());
		model.setIndoorMapId(this.indoorMapId);
		model.setStartx(this.getStartx());
		model.setStarty(this.starty);
		model.setEndx(this.endx);
		model.setEndy(this.endy);
		
		
		
		return model;
	}
	

	@Override
	public String toString() {
		return "RouteDto [id=" + id + ", startx=" + startx + ", starty="
				+ starty + ", endx=" + endx + ", endy=" + endy
				+ ", indoorMapId=" + indoorMapId + "]";
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




	
	
}
