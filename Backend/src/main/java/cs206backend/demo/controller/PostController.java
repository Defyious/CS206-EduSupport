package cs206backend.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import cs206backend.demo.models.Answer;
import cs206backend.demo.models.Question;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.payload.response.QuestionResponse;
import cs206backend.demo.repository.AnswerRepository;
import cs206backend.demo.repository.QuestionRepository;
import cs206backend.demo.repository.SubjectRepository;
import cs206backend.demo.service.AnswerService;
import cs206backend.demo.service.QuestionService;
import cs206backend.demo.service.util.imageUtils;
import jakarta.transaction.Transactional;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin(origins = "http://localhost:3000")
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
            @RequestParam("menteeID") Long menteeID,
            @RequestParam("title") String title,
            @RequestParam("educationLevel") String educationLevel,
            @RequestParam("subject") String subject,
            @RequestParam("description") String description,
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam("type") String type) throws IOException {
        try {
            Question question = questionService.createQuestion(menteeID, title, educationLevel, subject, description, file, type);
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid Inputs");
        }
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<?> getQuestion(@PathVariable Long questionId) {
        try {
            Question qn = questionService.getQuestion(questionId);
            QuestionResponse res = new QuestionResponse(qn.getId(), qn.getTitle(), qn.getContent(),
                                     EducationLevel.fromInt(qn.getEduLevel()).toString(), qn.getSubject(),
                                     qn.getMenteeID(), Boolean.toString(qn.isSolved()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @GetMapping("/questions/{menteeId}")
    public ResponseEntity<?> getQuestionsByMentee(@PathVariable Long menteeId) {
    try {
        List<Question> questions = questionService.getAllQuestionByMentee(menteeId);
        List<QuestionResponse> responses = questions.stream()
                .map(qn -> new QuestionResponse(qn.getId(), qn.getTitle(), qn.getContent(),
                        EducationLevel.fromInt(qn.getEduLevel()).toString(), qn.getSubject(),
                        qn.getMenteeID(), Boolean.toString(qn.isSolved())))
                .collect(Collectors.toList());
        return ResponseEntity.ok(responses);
    } catch (Exception e) {
        return ResponseEntity.badRequest().body(e.getMessage()); // It's better to return the message rather than the stack trace
    }
}

    @GetMapping("questions")
    public ResponseEntity<?> getAllQuestions() {
        try {
            List<Question> questions = questionService.getAllQuestions();
            List<QuestionResponse> responses = questions.stream()
                    .map(qn -> new QuestionResponse(qn.getId(), qn.getTitle(), qn.getContent(),
                            EducationLevel.fromInt(qn.getEduLevel()).toString(), qn.getSubject(),
                            qn.getMenteeID(), Boolean.toString(qn.isSolved())))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(responses);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("image/{type}/{questionId}")
    public ResponseEntity<?> getImage(@PathVariable String type,  @PathVariable Long questionId) {
        try {
            byte[] img;
            if (type.equals("question")) {
                img = questionService.getImage(questionId);
            } else if (type.equals("answer")) {
                img = answerService.getImage(questionId);
            } else {
                return ResponseEntity.badRequest().body("Specify type.");
            }
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.valueOf("image/png"))
                    .body(img);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }
    
    
    @PostMapping("question/{questionId}/update/{isSolved}")
    public ResponseEntity<?> isQuestionResolved(@PathVariable Long questionId, @PathVariable Boolean isSolved) {
        try {
            Question question = questionService.updateQuestion(questionId, isSolved);
            return ResponseEntity.ok(question);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @PostMapping("question/{qnId}/answer") 
    public ResponseEntity<?> createAnswer(@PathVariable Long qnId, 
                        @RequestParam(value = "file", required = false) MultipartFile file,
                        @RequestParam("content") String content) {
        
        try {
            Answer answer = answerService.createAnswer(qnId, content, file);
            return ResponseEntity.ok(answer);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid Inputs");
        }
    }
    
    @GetMapping("question/{qnId}/answers")
    public ResponseEntity<List<Answer>> getAnswersForQuestion(@PathVariable("qnId") Long questionId) {
        List<Answer> answers = answerService.findAnswersByQuestionId(questionId);
        if (answers.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(answers);
    }
    
    
}
