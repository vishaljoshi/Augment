package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.avaje.ebean.Model;

import play.data.validation.Constraints;


@Entity
public class Customer extends Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@Constraints.Required
	public String customerName;
	
	public String OSType;
	
	public String deviceType;
	
	public static final Find<Long,Customer> find = new Find<Long,Customer>(){};
	
	public static void save(Customer cust) {
		cust.save();
	}
	
	public static Customer get(Long id) {
		return Customer.find.byId(id);		
	}
	
	public static List<Customer> list() {
		return Customer.find.select("id, customerName, OSType, deviceType").findList();
	}
}
