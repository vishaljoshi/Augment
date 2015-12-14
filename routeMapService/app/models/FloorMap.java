package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import com.avaje.ebean.Model;

import play.data.validation.Constraints;


@Entity
public class FloorMap extends Model {

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
	public String name;
	
	public String description;	
	
	@Lob
	public byte[] mapfile;
	
	public static final Find<Long,FloorMap> find = new Find<Long,FloorMap>(){};

	public static void save(FloorMap map) {
		map.save();
	}
	
	public static FloorMap create() {
		return new FloorMap();
	}
	
	public static List<FloorMap> list() {
		return FloorMap.find.select("id, name, description, lengthInPixels, widthInPixels, scale").findList();
	}
	
	public static FloorMap get(Long id) {
		return FloorMap.find.byId(id);		
	}
}
