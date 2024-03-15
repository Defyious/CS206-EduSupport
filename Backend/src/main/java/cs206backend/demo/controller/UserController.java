package cs206backend.demo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.payload.request.MenteeRegRequest;
import cs206backend.demo.payload.request.MentorRegRequest;
import cs206backend.demo.payload.response.MessageResponse;
import cs206backend.demo.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
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

    // @GetMapping("/details/{userID}")
    // public String getMethodName(@RequestParam String param) {
    //     return new String();
    // }

    @PostMapping("/register/mentee")
    public ResponseEntity<?> registerMentee(@Valid @RequestBody MenteeRegRequest menteeRegRequest) {
        
        String username = menteeRegRequest.getUsername();
        EducationLevel eduLevel = EducationLevel.getENUMEduLevel(menteeRegRequest.getEducationLevel());
        boolean isPremium = Boolean.parseBoolean(menteeRegRequest.getIsPremium());
        try {
            userService.registerMentee(username, eduLevel, isPremium);
            return ResponseEntity.ok("Mentee Registered");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }
    
    @PostMapping("/register/mentor")
    public ResponseEntity<?> registerMentor(@Valid @RequestBody MentorRegRequest mentorRegRequest) {
        
        String username = mentorRegRequest.getUsername();
        EducationLevel eduLevel = EducationLevel.getENUMEduLevel(mentorRegRequest.getEducationLevel());
        List<Subject> subjects = new ArrayList<>();
        List<String> subjectsPreFormating = mentorRegRequest.getSubjects();
        for (String s : subjectsPreFormating) {
            subjects.add(Subject.getENUMSubject(s));
        }
        
        try {
            userService.registerMentor(username, eduLevel, subjects);
            return ResponseEntity.ok("Mentor Registered");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }
    
    
}
