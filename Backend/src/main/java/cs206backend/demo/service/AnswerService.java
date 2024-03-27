package cs206backend.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import cs206backend.demo.models.Answer;
import cs206backend.demo.models.Question;
import cs206backend.demo.repository.AnswerRepository;
import cs206backend.demo.repository.QuestionRepository;
import cs206backend.demo.service.util.imageUtils;
import jakarta.transaction.Transactional;

@Service
public class AnswerService {
    
    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @Transactional
    public Answer createAnswer(Long qnId, String content,  MultipartFile file) throws IOException {
        Question question = questionRepository.findById(qnId).get();
        Answer answer;
        if (file == null) {
            answer = new Answer(content, qnId);
        } else {
            byte[] compressedImage = imageUtils.compressImage(file.getBytes());
            answer = new Answer(content, compressedImage, qnId);
        }
        System.out.println("Check 0");
        System.out.println(answer.getImage());
        System.out.println("Check 1");
        answerRepository.save(answer);
        return answer;
    }

	public List<Answer> findAnswersByQuestionId(Long questionId) {
		return answerRepository.findByQuestionId(questionId);
	}

    public byte[] getImage(long id) {
        Answer answer = answerRepository.findById(id).get();
        return imageUtils.decompressImage(answer.getImage());
    }
