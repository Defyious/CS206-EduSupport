package cs206backend.demo.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.SubjectEntity;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.payload.exception.usernameExistException;
import cs206backend.demo.payload.request.UpdateRequest;
import cs206backend.demo.repository.MenteeRepository;
import cs206backend.demo.repository.MentorRepository;
import cs206backend.demo.repository.SubjectRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    private MenteeRepository menteeRepository;
    private MentorRepository mentorRepository;
    private SubjectRepository subjectRepository;

    @Autowired
    public UserService(MenteeRepository menteeRepository, MentorRepository mentorRepository, SubjectRepository subjectRepository) {
        this.menteeRepository = menteeRepository;
        this.mentorRepository = mentorRepository;
        this.subjectRepository = subjectRepository;
    }

    @Transactional
    public Mentee registerMentee(String userName, EducationLevel eduLevel, boolean isPremium) throws usernameExistException {
        if (menteeRepository.existsByUsername(userName)) {
            throw new usernameExistException();
        }
        Mentee mentee = new Mentee(userName, eduLevel.getValue(), isPremium);
        menteeRepository.save(mentee);
        return mentee;
    }

    @Transactional
    public Mentor registerMentor(String userName, EducationLevel eduLevel, List<Subject> subjects, String availabilityTiming) throws usernameExistException{
        if (mentorRepository.existsByUsername(userName)) {
            throw new usernameExistException();
        }
    
        Set<SubjectEntity> subjectEntities = subjects.stream()
        .map(subject -> subjectRepository.findByName(subject.name()).get())
        .collect(Collectors.toSet());
        Mentor mentor = new Mentor(userName, eduLevel.getValue(), availabilityTiming);
        mentor.setSubjects(subjectEntities);
        mentorRepository.save(mentor);
        return mentor;
    }

    public Mentor getMentor(Long id) throws NoSuchElementException {
        Mentor mentor = mentorRepository.findById(id).get();
        return mentor;
    }
    public Mentee loginMentee(String username) throws NoSuchElementException{

        Mentee mentee = menteeRepository.findByUsername(username).get();
        return mentee;
    }

    public Mentor loginMentor(String username) throws NoSuchElementException{
        
        Mentor mentor = mentorRepository.findByUsername(username).get();
        mentor.setOnline(true);
        return mentor;
    }

    @Transactional
    public Mentor updateAvailabilityTiming(Long id, String newAvailabilityTiming) {
        // Fetch the mentor by id
        Mentor mentor = mentorRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Mentor not found with id: " + id));
        
        // Update the availability timing
        mentor.setAvailabilityTiming(newAvailabilityTiming);
        
        // Save the updated mentor back to the database
        return mentorRepository.save(mentor);
    }

}
