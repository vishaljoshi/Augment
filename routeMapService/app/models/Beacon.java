package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.avaje.ebean.Model;

import play.data.validation.Constraints;

@Entity
public class Beacon extends Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@Constraints.Required
	public String uuid;

	public int xCord;
	
	public int yCord;
	
	public String name;
	
	public static final Find<Long,Beacon> find = new Find<Long,Beacon>(){};
	
	public static void save(Beacon b) {
		b.save();
	}
	
	public static Beacon get(Long id) {
		return Beacon.find.byId(id);		
	}
	
	public static List<Beacon> list() {
		return Beacon.find.select("id, uuid, xCord, yCord").findList();
	}
	
}
