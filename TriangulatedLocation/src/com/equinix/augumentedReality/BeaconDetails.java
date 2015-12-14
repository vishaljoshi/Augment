package com.equinix.augumentedReality;
/**
 * 
 */

/**
 * @author njirafe
 *
 */
public class BeaconDetails {

	private Location location;

	private double distance;

	public BeaconDetails(Location location, double distance) {
		this.location = location;
		this.distance = distance;
	}


	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

}
