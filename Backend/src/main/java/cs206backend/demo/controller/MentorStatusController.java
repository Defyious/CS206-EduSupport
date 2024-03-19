package cs206backend.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import cs206backend.demo.payload.request.StatusUpdateRequest;
import cs206backend.demo.service.UserStatusService;

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

    @PostMapping("/update")
    public ResponseEntity<?> updateStatus(@RequestBody StatusUpdateRequest request) {
        UserStatusService.updateUserStatus(request.getUserID(), request.isOnline());
        return ResponseEntity.ok().build();
    }
    
}
