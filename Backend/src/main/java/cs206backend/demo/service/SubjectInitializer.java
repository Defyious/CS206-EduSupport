package cs206backend.demo.service;

import org.springframework.stereotype.Component;

import cs206backend.demo.models.SubjectEntity;
import cs206backend.demo.models.enums.Subject;
import cs206backend.demo.repository.SubjectRepository;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Arrays;

@Component
public class SubjectInitializer {

    private final SubjectRepository subjectRepository;

    // Constructor injection is recommended
    public SubjectInitializer(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @PostConstruct
    public void initSubjects() {
        // Check if the subjects are already populated to avoid duplicate entries
        if (subjectRepository.count() == 0) {
            Arrays.stream(Subject.values()).forEach(subject -> {
                SubjectEntity subjectEntity = new SubjectEntity(subject);
                subjectRepository.save(subjectEntity);
            });
        }
    }
}
