package cs206backend.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.Rating;
import cs206backend.demo.models.SubjectEntity;
import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.payload.exception.usernameExistException;
import cs206backend.demo.payload.request.UpdateRequest;
import cs206backend.demo.repository.MenteeRepository;
import cs206backend.demo.repository.MentorRepository;
import cs206backend.demo.repository.RatingRepository;
import cs206backend.demo.repository.SubjectRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    private MenteeRepository menteeRepository;
    private MentorRepository mentorRepository;
    private SubjectRepository subjectRepository;
    private RatingRepository ratingRepository;

    @Autowired
    public UserService(MenteeRepository menteeRepository, MentorRepository mentorRepository,
                     SubjectRepository subjectRepository, RatingRepository ratingRepository) {
        this.menteeRepository = menteeRepository;
        this.mentorRepository = mentorRepository;
        this.subjectRepository = subjectRepository;
        this.ratingRepository = ratingRepository;
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
        System.out.println(newAvailabilityTiming);
        mentor.setAvailabilityTiming(newAvailabilityTiming);
        
        // Save the updated mentor back to the database
        return mentorRepository.save(mentor);
    }

    public List<Mentor> getAvailableMentors(long userId, String subject) {
        // Retrieve the mentee's education level
        Mentee mentee = menteeRepository.findById(userId)
            .orElseThrow(() -> new EntityNotFoundException("Mentee not found with id: " + userId));
        int menteeEducationLevel = mentee.getEducationLevel();

        // Find mentors with a higher education level who are online
        List<Mentor> allMentors = mentorRepository.findByEducationLevelGreaterThanAndIsOnlineTrue(menteeEducationLevel);
        List<Mentor> subjectMentors = allMentors.stream()
        .filter(mentor -> mentor.getSubjects().stream()
            .anyMatch(subjectEntity -> subjectEntity.getName().equalsIgnoreCase(subject)))
        .collect(Collectors.toList());
        // List<Mentor> subjectMentors = mentorRepository.findByIsOnline(true);
        return subjectMentors;
    }

    public void mentorPing(long menteeId, long mentorId, long questionId) {
        Mentor mentor = mentorRepository.findById(mentorId).get();
        mentor.setMenteeRequest(menteeId);
        mentor.setQuestionRequest(questionId);
    }

    public List<Long> mentorCheck(long mentorId) {
        Mentor mentor = mentorRepository.findById(mentorId).get();
        long num = mentor.getMenteeRequest();
        List<Long> lst = new ArrayList<>();
        lst.add(num);
        if (num > 0) {
            lst.add(mentor.getQuestionRequest());
        }
        return lst;
    }

    public long responseHandler(long mentorId) {
        Mentor mentor = mentorRepository.findById(mentorId).get();
        long qn = mentor.getQuestionRequest();
        mentor.setMenteeRequest(0);
        mentor.setQuestionRequest(0);
        return qn;
    }

    public void addRating(long mentorId, int rating, String comments) {
        Rating rate = new Rating(rating, comments, mentorRepository.findById(mentorId).get());
        ratingRepository.save(rate);
    }

    public List<Rating> getRating(long mentorId) {
        
        return ratingRepository.findByMentorId(mentorId);
    }

    public List<Mentor> getAllMentors() {
        List<Mentor> mentors = mentorRepository.findAll();
        return mentors;
    }

    public ResponseEntity<String> saveMentor(Long menteeId, Long mentorId) {
        Optional<Mentee> menteeOptional = menteeRepository.findById(menteeId);
        Optional<Mentor> mentorOptional = mentorRepository.findById(mentorId);
        if (menteeOptional.isPresent() && mentorOptional.isPresent()) {
            Mentee mentee = menteeOptional.get();
            mentee.getMentorIds().add(mentorId);
            menteeRepository.save(mentee);
            return ResponseEntity.ok("Mentor saved to Mentee.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<List<Mentor>> getMentorsByMentee(Long menteeId) {
        Optional<Mentee> menteeOptional = menteeRepository.findById(menteeId);
        if (menteeOptional.isPresent()) {
            Mentee mentee = menteeOptional.get();
            List<Long> mentorIds = mentee.getMentorIds();
            List<Mentor> mentors = mentorRepository.findAllById(mentorIds);
            return ResponseEntity.ok(mentors);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
