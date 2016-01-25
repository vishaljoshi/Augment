package controllers;

import java.io.IOException;

import models.Beacon;
import models.IndoorMap;

import org.apache.commons.codec.binary.Base64;

import play.libs.F.Promise;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http.MultipartFormData.FilePart;
import play.mvc.Result;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.io.Files;

import dto.IndoorMapDto;

public class Application extends Controller {

	
	@BodyParser.Of(BodyParser.Json.class)
	public Result addMap() throws JsonParseException, JsonMappingException, IOException{
		Promise<Result> resultPromise = null;
		JsonNode json = request().body().asJson();
		String mapName = json.get("mapName").textValue();
		JsonNode beacon = json.get("beacons").get(0);
		JsonNode route = json.get("routes").get(0);;
		JsonNode image = json.get("image");
		

		if (image != null) {
			String bytes = image.asText();
			bytes = bytes.substring(bytes.indexOf("base64,") + 7);
			byte[] buffer = Base64.decodeBase64(bytes);
			((ObjectNode) json).put("image", bytes);
		}
		
		
		IndoorMapDto indoorMapdto = (new ObjectMapper()).configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
				.readValue(json.toString(), IndoorMapDto.class);

		System.out.println(indoorMapdto);
		IndoorMap indoorMap  = indoorMapdto.toModel();
		indoorMap.saveMap();
		
		return ok(Json.toJson(indoorMap));

	}
	@BodyParser.Of(BodyParser.Json.class)
	public Result saveMap() throws JsonParseException, JsonMappingException, IOException{
		Promise<Result> resultPromise = null;
		JsonNode json = request().body().asJson();
		String mapName = json.get("mapName").textValue();
		JsonNode beacon = json.get("beacons").get(0);
		JsonNode route = json.get("routes").get(0);;
		JsonNode image = json.get("image");
	
        
		if (image != null) {
			String bytes = image.asText();
			bytes = bytes.substring(bytes.indexOf("base64,") + 7);
			byte[] buffer = Base64.decodeBase64(bytes);
			((ObjectNode) json).put("image", bytes);
		}
		
		
		IndoorMapDto indoorMapdto = (new ObjectMapper()).configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
				.readValue(json.toString(), IndoorMapDto.class);

		System.out.println(indoorMapdto);
		IndoorMap indoorMap  = indoorMapdto.toModel();
		
		indoorMap.deleteMap();
		
		indoorMap.saveMap();
		
		return ok(Json.toJson(indoorMap));

	}    
	
	public Result map(Long id) {
		IndoorMap indoorMap = IndoorMap.get(id);
		return ok(Json.toJson(indoorMap.copyToDto()));
	}
	
	public Result index() {
		return ok("Success").as("application/json");
	}

/*	public Result addMap() {
		JsonNode node = request().body().asJson();
		if (node == null || node.isNull()) {
			return badRequest("Request body is empty").as("application/text");
		}
		FloorMap map = Json.mapper().convertValue(node, FloorMap.class);
		map.save();
		return ok("Added Map Successfully!").as("application/json");
	}*/

	/*public Result map(Long id) {
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
	}*/
}
