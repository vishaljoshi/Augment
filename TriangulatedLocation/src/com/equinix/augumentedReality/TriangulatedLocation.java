package com.equinix.augumentedReality;

/**
 * 
 */

/**
 * @author njirafe
 *
 */
public class TriangulatedLocation {

	public Location getUserLocation(BeaconDetails bd1,BeaconDetails bd2,BeaconDetails bd3 ) {

		double a1 = bd1.getLocation().getX_cord();
		double b1 = bd1.getLocation().getY_cord();
		double c1 = bd1.getDistance() ;

		double a2= bd2.getLocation().getX_cord();
		double b2 = bd2.getLocation().getY_cord();
		double c2 = bd2.getDistance();

		double a3 = bd3.getLocation().getX_cord();;
		double b3 = bd3.getLocation().getY_cord();
		double c3 = bd3.getDistance() ;

		double k1 = (c1*c1) - (a1*a1) - (b1*b1);
		double k2 = (c2*c2) - (a2*a2) - (b2*b2);
		double k3 = (c3*c3) - (a3*a3) - (b3*b3);

		//m1 = 2a1x + 2b1y - (2a2x +2b2y )
		//		= 2a1x-2a2x 	+ 		2b1y - 2b2y
		//		= l1x 			+ 		n1y

		double m1 = k2 - k1 ;
		double l1x = (2*a1) - (2*a2);
		double n1y = (2*b2) - (2*b1)  ;

		double m2 = k3 -k2;
		double l2x = (2*a2) - (2*a3);
		double n2y = (2*b3) - (2*b2);

		Double x = Math.ceil(((n2y*m1) - (n1y*m2))/(n2y*l1x - n1y*l2x));

		//m1 = l1x + n1y
		//y = (l1x - m1)/n1
		Double y = Math.ceil(((l1x*x) - m1)/n1y);

		Location userLocation = new Location(x.intValue(),y.intValue());

		return userLocation;

	}
	
	public Location getUserRadLocation(BeaconDetails bd1,BeaconDetails bd2,BeaconDetails bd3 ) {

		int earthR = 6371;
		double a1 = earthR*bd1.getLocation().getX_cord();
		double b1 = bd1.getLocation().getY_cord();
		double c1 = bd1.getDistance() ;

		double a2= bd2.getLocation().getX_cord();
		double b2 = bd2.getLocation().getY_cord();
		double c2 = bd2.getDistance();

		double a3 = bd3.getLocation().getX_cord();;
		double b3 = bd3.getLocation().getY_cord();
		double c3 = bd3.getDistance() ;

		double k1 = (c1*c1) - (a1*a1) - (b1*b1);
		double k2 = (c2*c2) - (a2*a2) - (b2*b2);
		double k3 = (c3*c3) - (a3*a3) - (b3*b3);

		//m1 = 2a1x + 2b1y - (2a2x +2b2y )
		//		= 2a1x-2a2x 	+ 		2b1y - 2b2y
		//		= l1x 			+ 		n1y

		double m1 = k2 - k1 ;
		double l1x = (2*a1) - (2*a2);
		double n1y = (2*b2) - (2*b1)  ;

		double m2 = k3 -k2;
		double l2x = (2*a2) - (2*a3);
		double n2y = (2*b3) - (2*b2);

		Double x = Math.ceil(((n2y*m1) - (n1y*m2))/(n2y*l1x - n1y*l2x));

		//m1 = l1x + n1y
		//y = (l1x - m1)/n1
		Double y = Math.ceil(((l1x*x) - m1)/n1y);

		Location userLocation = new Location(x.intValue(),y.intValue());

		return userLocation;

	}

}
