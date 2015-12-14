package controllers;

import java.io.IOException;
import java.util.Base64;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.common.io.Files;

import models.Beacon;
import models.FloorMap;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http.MultipartFormData.FilePart;
import play.mvc.Result;

public class Application extends Controller {

	public Result index() {
		return ok("Success").as("application/json");
	}

	public Result addMap() {
		JsonNode node = request().body().asJson();
		if (node == null || node.isNull()) {
			return badRequest("Request body is empty").as("application/text");
		}
		FloorMap map = Json.mapper().convertValue(node, FloorMap.class);
		map.save();
		return ok("Added Map Successfully!").as("application/json");
	}

	public Result map(Long id) {
		FloorMap map = FloorMap.get(id);
		return ok(Json.toJson(map)).as("application/json");
	}

	public Result maps() {
		return ok(Json.toJson(FloorMap.list())).as("application/json");
	}

	public Result uploadMap(Long id) {
		FloorMap map = FloorMap.get(id);
		if(map==null) {
			return badRequest("Unable to find the floor").as("text/plain");
		}
		FilePart file = request().body().asMultipartFormData().getFile("map-image");
		if (file == null) {
			return badRequest("Empty file").as("text/plain");
		}
		try {
			//map.mapfile = Base64.getEncoder().encode(Files.toByteArray(file.getFile()));
			map.mapfile = Files.toByteArray(file.getFile());
			System.out.println("File = " + map.mapfile);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return internalServerError("Error while reading file", e.getMessage()).as("text/plain");
		}
		map.save();		
		return ok("Success").as("application/json");
	}

	public Result downloadMap(Long id) {
		FloorMap map = FloorMap.get(id);
		if (map != null && map.mapfile != null) {
			//return ok(Base64.getDecoder().decode(map.mapfile)).as("application/octet-stream");
			return ok(map.mapfile).as("application/octet-stream");
		} else {
			return notFound("Unable to find map/map-file. Please check your inputs.").as("application/json");
		}
	}

	public Result ping(Long id) {
		return ok("Success").as("application/json");
	}

	public Result registerDevice() {
		return ok("Success").as("application/json");
	}

	public Result beacons() {
		return ok(Json.toJson(Beacon.list())).as("application/json");
	}

	public Result addBeacon() {
		JsonNode node = request().body().asJson();
		if (node == null || node.isNull()) {
			return badRequest("Request body is empty").as("application/text");
		}
		Beacon beacon = Json.mapper().convertValue(node, Beacon.class);
		beacon.save();
		return ok("Beacon added successfully!").as("application/json");
	}
}
