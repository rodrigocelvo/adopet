package com.fecaf.adopet.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fecaf.adopet.model.User;
import com.fecaf.adopet.repository.UserRepository;
import com.fecaf.adopet.response.ResponseMessage;

@RestController
public class SessionController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/me")
    public ResponseEntity<Object> findUserById(@RequestBody User userData) {
        try {

        Optional<User> user = userRepository.findById(userData.getId());
        if(user.isPresent())
            return ResponseMessage.obj(user.get(), HttpStatus.OK);

        else {
            return ResponseMessage.message("User is not found.", HttpStatus.NOT_FOUND);
        }
    } catch (Exception e) {
            return ResponseMessage.message("Unexpected user error.", HttpStatus.NOT_FOUND);
        }
    }
}
