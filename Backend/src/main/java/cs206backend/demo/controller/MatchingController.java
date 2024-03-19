package cs206backend.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin
@RestController
@RequestMapping("/api/matching")
public class MatchingController {

    // @PostMapping("/mentee/random") // Mentee to call when want to find api
    // public String postMethodName(@RequestBody String entity) {
    //     //TODO: process POST request
        
    //     return entity;
    // }
    
    // @GetMapping("/{mentorId}/check") // Mentor to constantly check to see
    // public ResponseEntity<?> checkForCallRequests(@PathVariable Long mentorId) {
        
    //     return ResponseEntity.ok(callRequests);
    // }

    
}
