package cs206backend.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import cs206backend.demo.payload.request.StatusUpdateRequest;
import cs206backend.demo.service.UserStatusService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/status")
public class MentorStatusController {
    
    @Autowired
    private UserStatusService UserStatusService;

    @PostMapping("/update/{mentorId}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
    public ResponseEntity<?> updateStatus(@PathVariable long mentorId) {
        UserStatusService.updateUserStatus(mentorId, true);
        return ResponseEntity.ok().build();
    }
    
}
