package cs206backend.demo.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.repository.MenteeRepository;
import cs206backend.demo.repository.MentorRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    private MenteeRepository menteeRepository;
    private MentorRepository mentorRepository;

    @Autowired
    public UserService(MenteeRepository menteeRepository, MentorRepository mentorRepository) {
        this.menteeRepository = menteeRepository;
        this.mentorRepository = mentorRepository;
    }

    public Mentee registerMentee(String userName, EducationLevel eduLevel, boolean isPremium) {
        Mentee mentee = new Mentee(userName, eduLevel, isPremium);
        menteeRepository.save(mentee);
        return mentee;
    }

    public Mentor registerMentor(String userName, EducationLevel eduLevel, List<Subject> subjects) {
        return null;
    }

    public Mentee loginMentee(String username) throws NoSuchElementException{

        Mentee mentee = menteeRepository.findByUsername(username).get();
        return mentee;
    }

    public Mentor loginMentor(String username) throws NoSuchElementException{

        Mentor mentor = mentorRepository.findByUsername(username).get();
        return mentor;
    }

}
