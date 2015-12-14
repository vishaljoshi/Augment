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

		Location b1Location = new Location(100, 100);
		Location b2Location = new Location(160, 120);
		Location b3Location = new Location(70, 150);
		BeaconDetails beacon1 = new BeaconDetails(b1Location ,50.00);
		BeaconDetails beacon2 = new BeaconDetails(b2Location , 36.06 );
		BeaconDetails beacon3 = new BeaconDetails(b3Location ,60.83);

		Location userLocation = new TriangulatedLocation().getUserLocation(beacon1, beacon2, beacon3);
		System.out.println("Value of x : " + userLocation.getX_cord());

		System.out.println("Value of y : " + userLocation.getY_cord());

	}
}
