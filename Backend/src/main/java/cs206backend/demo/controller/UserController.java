package cs206backend.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.validation.Valid;

import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.payload.request.LoginRequest;
import cs206backend.demo.payload.request.MenteeRegRequest;
import cs206backend.demo.payload.request.MentorRegRequest;
import cs206backend.demo.payload.request.UpdateRequest;
import cs206backend.demo.payload.response.MessageResponse;
import cs206backend.demo.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {
    public UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/details/{userID}")
    public ResponseEntity<?> getMentor(@PathVariable long userID) {
        try {
            Mentor mentor = userService.getMentor(userID);
            return ResponseEntity.ok(mentor);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/details/update/{userID}")
    public ResponseEntity<?> updateMentorAvailability(@PathVariable long userID, @RequestBody UpdateRequest update) {
        try {
            Mentor mentor = userService.updateAvailabilityTiming(userID, update.getAvailability());
            return ResponseEntity.ok(mentor);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
    

    @PostMapping("/register/mentee")
    public ResponseEntity<?> registerMentee(@Valid @RequestBody MenteeRegRequest menteeRegRequest) {
        
        String username = menteeRegRequest.getUsername();
        EducationLevel eduLevel = EducationLevel.getENUMEduLevel(menteeRegRequest.getEducationLevel());
        boolean isPremium = Boolean.parseBoolean(menteeRegRequest.getIsPremium());
        try {
            userService.registerMentee(username, eduLevel, isPremium);
            return ResponseEntity.ok("Mentee Registered");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PostMapping("/register/mentor")
    public ResponseEntity<?> registerMentor(@Valid @RequestBody MentorRegRequest mentorRegRequest) {
        
        String username = mentorRegRequest.getUsername();
        EducationLevel eduLevel = EducationLevel.getENUMEduLevel(mentorRegRequest.getEducationLevel());
        String availabilityTiming = mentorRegRequest.getAvailabilityTiming();
        List<Subject> subjects = new ArrayList<>();
        List<String> subjectsPreFormating = mentorRegRequest.getSubjects();
        for (String s : subjectsPreFormating) {
            subjects.add(Subject.getENUMSubject(s));
            // System.out.println(Subject.getENUMSubject(s));
        }
        
        try {
            userService.registerMentor(username, eduLevel, subjects, availabilityTiming);
            return ResponseEntity.ok("Mentor Registered");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PostMapping("/login/mentee")
    public ResponseEntity<?> loginMentee(@RequestBody LoginRequest loginRequest) {

        try {
            Mentee mentee = userService.loginMentee(loginRequest.getUsername());
            return ResponseEntity.ok(mentee);
        } catch (NoSuchElementException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login/mentor")
    public ResponseEntity<?> loginMentor(@RequestBody LoginRequest loginRequest) {
        
        try {
            Mentor mentor = userService.loginMentor(loginRequest.getUsername());
            return ResponseEntity.ok(mentor);
        } catch (NoSuchElementException e) {
            return ResponseEntity.badRequest().body(e.toString());
        }
    }
    
}
