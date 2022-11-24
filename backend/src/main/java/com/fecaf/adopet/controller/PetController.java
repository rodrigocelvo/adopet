package com.fecaf.adopet.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fecaf.adopet.model.Pet;
import com.fecaf.adopet.repository.PetRepository;
import com.fecaf.adopet.response.ResponseMessage;

@RestController
public class PetController {
    @Autowired
    private PetRepository petRepository;

    @Value("${app.image_url}")
    private String imageBaseUrl;

    @GetMapping(value = "/pets")
    public ResponseEntity<Object> findAllPets() {
        return ResponseMessage.obj(petRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/pets/{id}")
    public ResponseEntity<Object> findPetById(@PathVariable(value = "id") String id) {
        try {

        Optional<Pet> pet = petRepository.findById(id);

        if(pet.isPresent())
            return ResponseMessage.obj(pet.get(), HttpStatus.OK);
        else 
            return ResponseMessage.message("Pet is not found.", HttpStatus.NOT_FOUND);
        
        } catch (Exception e) {
            return ResponseMessage.message("Unexpected pet error.", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value = "/pets")
    public ResponseEntity<Object> createPet(@RequestBody Pet pet) {
        try {
            petRepository.save(pet);
            return ResponseMessage.custom("id", pet.getId(),HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseMessage.message("Unable to create a pet.", HttpStatus.BAD_REQUEST);
        }
    }
    
    public static boolean isFileExists(File file) {
        return file.exists() && !file.isDirectory();
    }

    
    @DeleteMapping(value = "/pets/{id}")
    public ResponseEntity<Object> deletePetById(@PathVariable(value = "id") String id) {
        try {
            petRepository.deleteById(id);

            String filePath = imageBaseUrl + "/pets/" + id  + ".png";
            Path fileToDeletePath = Paths.get(imageBaseUrl + "/pets/" + id  + ".png");

            File file = new File(filePath);

            if (isFileExists(file)) {
                Files.delete(fileToDeletePath);
            }
        
            return ResponseMessage.code(HttpStatus.OK);
        } catch (Exception e) {
            return ResponseMessage.message("Pet is not found.", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = "/pets/{id}")
    public  ResponseEntity<Object> updatePet(@PathVariable(value = "id") String id, @RequestBody Pet pet) {
      try {
        Optional<Pet> newPet = petRepository.findById(id);

        if(newPet.isPresent()) {
            Pet _pet = newPet.get();
            _pet.setName(pet.getName());
            _pet.setWeight(pet.getWeight());
            _pet.setBirthDate(pet.getBirthDate());
            _pet.setSex(pet.getSex());
            _pet.setBreed(pet.getBreed());
            _pet.setTags(pet.getTags());
            _pet.setDescription(pet.getDescription());
            _pet.setCategory(pet.getCategory());
            _pet.setImgUrl(pet.getImgUrl());
            _pet.setAdopted(pet.getAdopted());
          
            petRepository.save(_pet);

            return ResponseMessage.code(HttpStatus.OK);
        }
        else {
            return ResponseMessage.message("Pet is not found.", HttpStatus.NOT_FOUND);
        }
      }catch (Exception e) {
        return ResponseMessage.message("Unexpected user error.", HttpStatus.BAD_REQUEST);
      }
    }

    @PatchMapping(value = "/pets/image/{oldId}/{newId}")
    public  ResponseEntity<Object> updateImagePet(@PathVariable(value = "oldId") String oldId, @PathVariable(value = "newId") String newId, @RequestBody Pet pet) {
      try {
        Optional<Pet> newPet = petRepository.findById(newId);

        if(newPet.isPresent()) {
            Pet _pet = newPet.get();
            _pet.setImgUrl(pet.getImgUrl());
          
            petRepository.save(_pet);

            Path yourFile = Paths.get(imageBaseUrl + "/pets/" + oldId + ".png");

            Files.move(yourFile, yourFile.resolveSibling(newId + ".png"));

            return ResponseMessage.code(HttpStatus.OK);
        }
        else {
            return ResponseMessage.message("Pet is not found.", HttpStatus.NOT_FOUND);
        }
      }catch (Exception e) {
        return ResponseMessage.message("Unexpected pet error.", HttpStatus.BAD_REQUEST);
      }
    }

    @PostMapping(value = "/pets/{userId}/adopt/{petId}")
    public  ResponseEntity<Object> adoptPet(@PathVariable(value = "userId")  String userId,  @PathVariable(value = "petId")  String petId, @RequestBody Pet pet) {
      try {
        Optional<Pet> newPet = petRepository.findById(petId);

        if(newPet.isPresent()) {
            Pet _pet = newPet.get();
            _pet.setAdopted(pet.getAdopted());
            _pet.setAdoptedBy(userId);
          
            petRepository.save(_pet);

            return ResponseMessage.code(HttpStatus.OK);
        }
        else {
            return ResponseMessage.message("Pet is not found.", HttpStatus.NOT_FOUND);
        }
      }catch (Exception e) {
        return ResponseMessage.message("Unexpected pet error.", HttpStatus.BAD_REQUEST);
      }
    }


    @GetMapping(value = "/pets/lasts")
    public ResponseEntity<Object> findLasts() {
        return ResponseMessage.obj(petRepository.findFirst8ByOrderByCreatedAtDesc(), HttpStatus.OK);
    }

    @GetMapping(value = "/pets/count")
    public ResponseEntity<Object> countTotalPets() {
        return ResponseMessage.count(petRepository.count(), HttpStatus.OK);
    }
}


