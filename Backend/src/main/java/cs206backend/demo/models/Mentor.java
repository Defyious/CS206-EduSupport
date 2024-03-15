package cs206backend.demo.models;

import jakarta.persistence.*;
import java.util.*;

import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import lombok.*;

@Entity
@Table(name = "mentor")
@Data
@NoArgsConstructor
public class Mentor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;

    private float rating;
    private int numRatings;

    private EducationLevel educationLevel;
    private List<Subject> subjects;
    
    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL)
    private List<Answer> answers;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL)
    private List<MentorMentee> mentorMentees;

    public Mentor(String username, EducationLevel educationLevel, List<Subject> subjects) {
        this.username = username;
        this.educationLevel = educationLevel;
        this.subjects = subjects;
    }
}
