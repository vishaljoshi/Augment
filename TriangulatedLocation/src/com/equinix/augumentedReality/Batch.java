package com.equinix.augumentedReality;
/**
 * 
 */

/**
 * @author njirafe
 *
 */
public class Batch {

	//Find location of "Object" based on the distance between the "Object" and Beacons
	public static void main(String[] args) {

		Location b1Location = new Location(0, 0);
		Location b2Location = new Location(0, 20);
		Location b3Location = new Location(20, 0);
		BeaconDetails beacon1 = new BeaconDetails(b1Location ,15);
		BeaconDetails beacon2 = new BeaconDetails(b2Location , 16.5 );
		BeaconDetails beacon3 = new BeaconDetails(b3Location ,15);

		Location userLocation = new TriangulatedLocation().getUserLocation(beacon1, beacon2, beacon3);
		System.out.println("Value of x : " + userLocation.getX_cord());

		System.out.println("Value of y : " + userLocation.getY_cord());

	}
}
