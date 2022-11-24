package com.fecaf.adopet.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.fecaf.adopet.model.User;
import com.fecaf.adopet.repository.UserRepository;
import com.fecaf.adopet.response.ResponseMessage;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<Object> findAllUsers() {
        return ResponseMessage.obj(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity<Object> findUserById(@PathVariable(value = "id") String id) {
        try {

        Optional<User> user = userRepository.findById(id);

        if(user.isPresent())
            return ResponseMessage.obj(user.get(), HttpStatus.OK);
        else
            return ResponseMessage.message("User is not found.", HttpStatus.NOT_FOUND);
        
        } catch(Exception e) {
            return ResponseMessage.message("Unexpected user error.", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value = "/users")
    public  ResponseEntity<Object> createUser(@RequestBody User user) {
        userRepository.save(user);

        return ResponseMessage.custom("code", user.getId(), HttpStatus.CREATED);
    }

    @PutMapping(value = "/users/{id}")
    public  ResponseEntity<Object> updateUser(@PathVariable(value = "id") String id, @RequestBody User user) {
      try {
        Optional<User> newUser = userRepository.findById(id);

        if(newUser.isPresent()) {
           User _user = newUser.get();
           _user.setName(user.getName());
           _user.setEmail(user.getEmail());
           _user.setPhone(user.getPhone());
           _user.setUf(user.getUf());
           _user.setCity(user.getCity());
           _user.setAvatar(user.getAvatar());
    
           userRepository.save(_user);

            return ResponseMessage.code(HttpStatus.OK);
        }
        else {
            return ResponseMessage.message("User is not found.", HttpStatus.NOT_FOUND);
        }
      }catch (Exception e) {
        return ResponseMessage.message("Unexpected user error.", HttpStatus.BAD_REQUEST);
      }
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<Object> deleteUserById(@PathVariable(value = "id") String id) {
        try {
            userRepository.deleteById(id);
            return ResponseMessage.code(HttpStatus.OK);
        } catch (Exception e) {
            return ResponseMessage.message("User is not found.", HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping(value = "/users/image/{id}")
    public  ResponseEntity<Object> updateImagePet(@PathVariable(value = "id") String id,  @RequestBody User user) {
      try {
        Optional<User> newUser = userRepository.findById(id);

        if(newUser.isPresent()) {
            User _user = newUser.get();
            _user.setAvatar(user.getAvatar());
          
            userRepository.save(_user);

            return ResponseMessage.code(HttpStatus.OK);
        }
        else {
            return ResponseMessage.message("Pet is not found.", HttpStatus.NOT_FOUND);
        }
      }catch (Exception e) {
        return ResponseMessage.message("Unexpected pet error.", HttpStatus.BAD_REQUEST);
      }
    }

    @GetMapping(value = "/users/count")
    public ResponseEntity<Object> countTotalUsers() {
        return ResponseMessage.count(userRepository.count(), HttpStatus.OK);
    }
}
