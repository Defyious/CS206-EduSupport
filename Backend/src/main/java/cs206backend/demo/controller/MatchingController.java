package cs206backend.demo.controller;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.Question;
import cs206backend.demo.payload.request.MatchRequest;
import cs206backend.demo.payload.response.PingResponse;
import cs206backend.demo.repository.MentorRepository;
import cs206backend.demo.service.QuestionService;
import cs206backend.demo.service.UserService;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;




@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("/api/matching")
public class MatchingController {

    @Autowired
    private UserService userService;

    @Autowired
    private QuestionService questionService;

    // Selection of mentee
    @GetMapping("/mentee/getMentors/{userId}")
    public ResponseEntity<?> getAvailableMentors(@PathVariable long userId, @RequestParam("questionId") long questionId) {
        Question question = questionService.getQuestion(questionId);
        String subject = question.getSubject();
        List<Mentor> mentors = userService.getAvailableMentors(userId, subject);
        return ResponseEntity.ok().body(mentors);
    }

    @PostMapping("/mentee/{userId}/select/{mentorId}")
    public ResponseEntity<?> chooseMentor(@PathVariable long userId, @PathVariable long mentorId, @RequestParam("questionId") long questionId) {
        System.out.println(userId);
        userService.mentorPing(userId, mentorId, questionId);
        return ResponseEntity.ok().body("Awaiting Mentor to recieve");
    }

    @GetMapping("/mentor/{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
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
    
    // Random matching of mentee
    @PostMapping("mentee/randomMentor")
    public ResponseEntity<?> requestMentor(@RequestParam long menteeId, @RequestParam long questionId) {

        Question question = questionService.getQuestion(questionId);
        String subject = question.getSubject();

        List<Mentor> availableMentors = userService.getAvailableMentors(menteeId, subject);
        System.out.println(availableMentors);
        for (Mentor mentor : availableMentors) {
            userService.mentorPing(menteeId, mentor.getId(), questionId);

            CompletableFuture<Boolean> questionStatusFuture = CompletableFuture.supplyAsync(() -> {
                try {
                    System.out.println("Check1");
                    // Loop to continuously check the question's status for up to 1 minute.
                    for (int i = 0; i < 30; i++) {
                        boolean isAccepted = questionService.checkQuestion(questionId);
                        if (isAccepted) {
                            return true; // Question has been accepted by the mentor.
                        }
                        // Sleep for 1 second before checking again.
                        Thread.sleep(2000);
                        System.out.println("Check every 2 secs");
                    }
                } catch (InterruptedException e) {
                    System.out.println("interrupt 1");
                    Thread.currentThread().interrupt();
                }
                return false;
            });

            try {
                System.out.println("Check 2");
                // Wait for the future to complete or timeout after 1 minute.
                boolean questionAccepted = questionStatusFuture.get(1, TimeUnit.MINUTES);
                System.out.println("Check 3");
                if (questionAccepted) {
                    return ResponseEntity.ok("Question accepted by a mentor.");
                } else {
                    userService.responseHandler(mentor.getId());
                }
                System.out.println("Check 3");
            } catch (Exception e) {
                Thread.currentThread().interrupt();
                return ResponseEntity.status(500).body("Error processing mentor response.");
            }
        }

        // If no mentors accepted the question
        return ResponseEntity.status(404).body("No mentors available to accept the question at this time.");
    }
}
    

