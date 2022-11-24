package com.fecaf.adopet.storage;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class Disk {
	
	@Value("${app.image_url}")
	private String path;
	
	@Value("/pets/")
	private String petPhotoDirectory;

  @Value("/users/")
	private String userPhotoDirectory;
	
	public void savePetPhoto(MultipartFile photo, String id) {
		this.savePhoto(this.petPhotoDirectory, photo, id);
	}
  	
	public void saveUserPhoto(MultipartFile avatar, String id) {
		this.savePhoto(this.userPhotoDirectory, avatar, id );
	}
	
	public void savePhoto(String photoDirectory, MultipartFile photo, String id) {
		Path pathDirectory = Paths.get(this.path, photoDirectory);
		Path photoPath = pathDirectory.resolve(id + ".png");

		try {

      Files.createDirectories(pathDirectory);
			photo.transferTo(photoPath.toFile());		
      
      
		} catch (IOException e) {
			throw new RuntimeException("Not possible upload image.", e);
		}		
	}
}