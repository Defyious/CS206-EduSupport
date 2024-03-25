package cs206backend.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import cs206backend.demo.models.Mentor;
import cs206backend.demo.repository.MentorRepository;

@Service
public class UserStatusService {

    @Autowired
    private MentorRepository mentorRepository;

    public void updateUserStatus(long id, boolean isOnline) {
        Optional<Mentor> mentor = mentorRepository.findById(id);
        mentor.ifPresent(m -> {
            m.setLastOnline(System.currentTimeMillis());
            m.setOnline(isOnline);
            mentorRepository.save(m);
        });
        
    }

    @Scheduled(fixedRate = 60000)
    public void deactivateInactiveUsers() {
        long now = System.currentTimeMillis();
        long threshold = now - (2 * 60 * 1000); // 2 minutes
        List<Mentor> mentorsToDeactivate = mentorRepository.findMentorsLastActiveBefore(threshold);
        for (Mentor mentor : mentorsToDeactivate) {
            mentor.setOnline(false);
            mentorRepository.save(mentor);
        }
    }

}
