package com.equinix.augumentedReality;
/**
 * 
 */

/**
 * @author njirafe
 *
 */
public class Location {

	private int x_cord;
	private int y_cord;

	public Location() {

	}
	public Location(int x_cord , int y_cord ){

		this.x_cord = x_cord;
		this.y_cord = y_cord;
	}
	public int getX_cord() {
		return x_cord;
	}

	public void setX_cord(int x_cord) {
		this.x_cord = x_cord;
	}

	public int getY_cord() {
		return y_cord;
	}

	public void setY_cord(int y_cord) {
		this.y_cord = y_cord;
	}
}
