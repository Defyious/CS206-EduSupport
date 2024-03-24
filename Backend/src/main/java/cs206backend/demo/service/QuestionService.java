package cs206backend.demo.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Question;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.repository.MenteeRepository;
import cs206backend.demo.repository.QuestionRepository;
import cs206backend.demo.service.util.imageUtils;
import jakarta.transaction.Transactional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private MenteeRepository menteeRepository;

    @Transactional
    public Question createQuestion(Long menteeId, String title, String educationLevel, String subject, String description, MultipartFile file, String type) throws IOException {
        int eduLevel = EducationLevel.getENUMEduLevel(educationLevel).getValue();
        Question question;
        boolean isForum = false; 
        if (type.equals("forum")) {
            isForum = true;
        }
        if (file == null) {
            question = new Question(title, description, eduLevel, subject, menteeId, isForum);
        } else {
            byte[] compressedImage = imageUtils.compressImage(file.getBytes());
            question = new Question(title, description, compressedImage, eduLevel, subject, menteeId, isForum);
        }
        // System.out.println(question.getMentee().getId());
        questionRepository.save(question);
        return question;
    }

    public byte[] getImage(long id) {
        Question question = questionRepository.findById(id).get();
        return imageUtils.decompressImage(question.getImage());
    }

    public Question getQuestion(Long id) {
        Question question = questionRepository.findById(id).get();
        return question;
    }

    public List<Question> getAllQuestionByMentee(Long id) {
        return questionRepository.findAll()
            .stream()
            .filter(question -> question.getMenteeID() == id) // Assuming isResolved() method exists
            .collect(Collectors.toList());
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll()
            .stream()
            .filter(question -> !question.isSolved()) // Assuming isResolved() method exists
            .filter(question -> question.isForum())
            .collect(Collectors.toList());
    }

    public Question updateQuestion(Long id, Boolean isSolved) {
       Question question = questionRepository.findById(id).get();
       question.setSolved(isSolved);
       questionRepository.save(question);
       return question;
    }

    public Question updateMentor(Long id, Boolean found) {
        Question question = questionRepository.findById(id).get();
        question.setFoundMentor(found);
        questionRepository.save(question);
        return question;
     }

    public void decompressImage(Question question) {
        question.setImage(imageUtils.decompressImage(question.getImage()));
    }

    public boolean checkQuestion(long id) {
        Question question = questionRepository.findById(id).get();
        System.out.println(question.toString());
        return question.getFound();
    }
    
}
