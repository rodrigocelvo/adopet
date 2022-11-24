package com.fecaf.adopet.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseMessage {
    public static ResponseEntity<Object> message(Object responseObject, HttpStatus httpStatus) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", responseObject);
        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> obj(Object responseObject, HttpStatus httpStatus) {
        return new ResponseEntity<>(responseObject, httpStatus);
    }

    public static ResponseEntity<Object> code(HttpStatus httpStatus) {
        return new ResponseEntity<>(httpStatus);
    }

    public static ResponseEntity<Object> count(Object responseObject, HttpStatus httpStatus) {
        Map<String, Object> response = new HashMap<>();
        response.put("count", responseObject);
        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> custom(String nameObject, Object responseObject, HttpStatus httpStatus) {
        Map<String, Object> response = new HashMap<>();
        response.put(nameObject, responseObject);
        return new ResponseEntity<>(response, httpStatus);
    }
}