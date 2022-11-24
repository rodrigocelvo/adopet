package com.fecaf.adopet.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fecaf.adopet.response.ResponseMessage;
import com.fecaf.adopet.storage.Disk;


@RestController
public class UploadController {
	
	@Autowired
	private Disk disco;
	
  @PostMapping(value = "/uploads/pet")
	public ResponseEntity<Object> uploadPetPhoto(@RequestParam MultipartFile photo, String id) {
		try { 
      disco.savePetPhoto(photo, id); 
      return ResponseMessage.custom("image_url", "http://192.168.0.9:3333/images/pets" + id + ".png", HttpStatus.OK);
    } catch(Exception e) {
      return ResponseMessage.message("Unable to upload image..", HttpStatus.BAD_REQUEST);
    }
	}

  @PostMapping(value = "/uploads/user/{id}")
	public ResponseEntity<Object> uploadUserPhoto(@RequestParam MultipartFile avatar, @PathVariable(value = "id") String id) {
    try { 
      disco.saveUserPhoto(avatar, id); 
      return ResponseMessage.custom("image_url", "http://192.168.0.9:3333/images/users/" + id + ".png", HttpStatus.OK);
    } catch(Exception e) {
      return ResponseMessage.message("Unable to upload image.", HttpStatus.BAD_REQUEST);
    }
  }
}