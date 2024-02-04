package cs206backend.demo.models;

import jakarta.persistence.*;
import java.util.*;

import com.nimbusds.oauth2.sdk.id.Subject;

import cs206backend.demo.models.enums.EducationLevel;
import lombok.*;

@Entity
@Table(name = "mentor")
@Data
public class Mentor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private float rating;
    private int numRatings;

    private List<EducationLevel> educationLevels;
    private List<Subject> subjects;
    
    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL)
    private List<Answer> answers;
}
