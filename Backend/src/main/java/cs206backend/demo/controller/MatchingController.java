package cs206backend.demo.controller;

import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.Question;
import cs206backend.demo.payload.response.PingResponse;
import cs206backend.demo.repository.MentorRepository;
import cs206backend.demo.service.QuestionService;
import cs206backend.demo.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin
@RestController
@RequestMapping("/api/matching")
public class MatchingController {

    @Autowired
    private UserService userService;

    @Autowired
    private QuestionService questionService;


    @GetMapping("/mentee/getMentors/{userId}")
    public ResponseEntity<?> getAvailableMentors(@PathVariable long userId) {
        List<Mentor> mentors = userService.getAvailableMentors(userId);
        return ResponseEntity.ok().body(mentors);
    }

    @PostMapping("/mentee/{userId}/select/{mentorId}")
    public ResponseEntity<?> chooseMentor(@PathVariable long userId, @PathVariable long mentorId, @RequestParam("questionId") long questionId) {
        System.out.println(userId);
        userService.mentorPing(userId, mentorId, questionId);
        return ResponseEntity.ok().body("Awaiting Mentor to recieve");
    }

    @GetMapping("/mentor/{userId}")
    public ResponseEntity<?> mentorCheckPings(@PathVariable long userId) {
        List<Long> chk = userService.mentorCheck(userId);
        if (chk.get(0) == 0) {
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
        } else {
            return ResponseEntity.ok().body(new PingResponse(chk.get(0),chk.get(1)));
        }
    }

    @GetMapping("/mentee/{qnId}")
    public ResponseEntity<?> menteeCheckPings(@PathVariable long qnId) {
        
        if (questionService.checkQuestion(qnId)) {
            return ResponseEntity.ok().body("Found Mentor");
        } else {
            return ResponseEntity.ok().body("Awaiting Mentor Response");
        }
    }
    
    @PostMapping("/mentor/response/{userId}")
    public ResponseEntity<?> responseToQuestion(@PathVariable long userId, @RequestParam("response") String response) {
        System.out.println(response);
        long questionID = userService.responseHandler(userId);
        if (response.equals("accept")) {
            questionService.updateMentor(questionID, true);
            questionService.updateQuestion(questionID, true);
            return ResponseEntity.ok().body("Accept Response Received");
        } 
        return ResponseEntity.ok().body("Reject Response Received");
    }
    
    @PostMapping("/mentee/{menteeId}/giverating/{mentorId}")
    public String giveRating(@PathVariable long menteeId, @PathVariable long mentorId, 
                            @RequestParam("rating") int rating, @RequestParam("comments") String comments) {
        
        userService.addRating(mentorId, rating, comments);
        return "Rating added";
    }
    

}
