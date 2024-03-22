package cs206backend.demo.service;

import java.io.IOException;
import java.util.List;

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
    public Question createQuestion(Long menteeId, String title, String educationLevel, String subject, String description, MultipartFile file) throws IOException {
        Mentee mentee = menteeRepository.findById(menteeId).get();
        int eduLevel = EducationLevel.getENUMEduLevel(educationLevel).getValue();
        byte[] compressedImage = imageUtils.compressImage(file.getBytes());
        Question question = new Question(title, description, compressedImage, eduLevel, subject, mentee);
        questionRepository.save(question);
        return question;
    }

    public Question getQuestion(Long id) {
        // TODO Auto-generated method stub
        Question question = questionRepository.findById(id).get();
        decompressImage(question);
        return question;
    }

    public List<Question> getAllQuestionByMentee(Long id) {
        Mentee mentee = menteeRepository.findById(id).get();
        return mentee.getQuestions();
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question updateQuestion(Long id, Boolean isSolved) {
       Question question = questionRepository.findById(id).get();
       question.setSolved(isSolved);
       questionRepository.save(question);
       return question;
    }

    public void decompressImage(Question question) {
        question.setImage(imageUtils.decompressImage(question.getImage()));
    }
    
}
