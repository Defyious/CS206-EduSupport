package cs206backend.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Question;
import cs206backend.demo.repository.MenteeRepository;
import cs206backend.demo.repository.QuestionRepository;

public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private MenteeRepository menteeRepository;

    public Question createQuestion(Question question, Long menteeId) {
        Mentee mentee = menteeRepository.findById(menteeId).get();
        question.setMentee(mentee);
        questionRepository.save(question);
        return question;
    }

    public Question getQuestion(Long id) {
        // TODO Auto-generated method stub
        return questionRepository.findById(id).get();
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
    
}
