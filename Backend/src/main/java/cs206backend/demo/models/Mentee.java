package cs206backend.demo.models;

import jakarta.persistence.*;
import java.util.*;

import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import lombok.*;

@Entity
@Table(name = "mentee")
@Data
@NoArgsConstructor
public class Mentee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private EducationLevel educationLevel;

    private boolean isPremium;

    @OneToMany(mappedBy = "mentee", cascade = CascadeType.ALL)
    private List<Question> questions;

    @OneToMany(mappedBy = "mentee", cascade = CascadeType.ALL)
    private List<MentorMentee> mentorMentees;

    public Mentee(String username, EducationLevel educationLevel, boolean isPremium) {
        this.username = username;
        this.educationLevel = educationLevel;
        this.isPremium = isPremium;
    }

}
