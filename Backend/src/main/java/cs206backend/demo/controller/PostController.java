package cs206backend.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import cs206backend.demo.models.Question;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.repository.AnswerRepository;
import cs206backend.demo.repository.QuestionRepository;
import cs206backend.demo.service.AnswerService;
import cs206backend.demo.service.QuestionService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin
@RestController
@RequestMapping("/api/post")
public class PostController {

    private QuestionService questionService;
    private AnswerService answerService;

    @Autowired
    public PostController(QuestionService questionService, AnswerService answerService) {
        this.questionService = questionService;
        this.answerService = answerService;
    }
    
    @PostMapping("/question")
    public ResponseEntity<?> uploadQuestion(
            @RequestParam("menteeID") Long menteeId,
            @RequestParam("title") String title,
            @RequestParam("educationLevel") String educationLevel,
            @RequestParam("subject") String subject,
            @RequestParam("description") String description,
            @RequestParam("file") MultipartFile file) throws IOException {

        Question question = new Question();
        question.setTitle(title);
        question.setEduLevel(EducationLevel.getENUMEduLevel(educationLevel));
        question.setSubject(Subject.getENUMSubject(subject));
        question.setContent(description);
        question.setImage(file.getBytes()); // Convert MultipartFile to byte[] and set

        try {
            question = questionService.createQuestion(question, menteeId);
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid Inputs");
        }
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<?> getQuestion(@PathVariable Long id) {
        try {
            Question question = questionService.getQuestion(id);
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @GetMapping("/questions/{menteeId}")
    public ResponseEntity<?> getQuestionsByMentee(@PathVariable Long id) {
        try {
            List<Question> question = questionService.getAllQuestionByMentee(id);
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @GetMapping("questions")
    public ResponseEntity<?> getAllQuestions() {
        try {
            List<Question> question = questionService.getAllQuestions();
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }
    
    @PostMapping("question/{questionId}/update/{isSolved}")
    public ResponseEntity<?> isQuestionResolved(@PathVariable Long id, Boolean isSolved) {
        try {
            Question question = questionService.updateQuestion(id, isSolved);
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }
    
}
