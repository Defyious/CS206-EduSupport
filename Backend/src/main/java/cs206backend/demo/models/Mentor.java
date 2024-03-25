package cs206backend.demo.models;

import jakarta.persistence.*;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    private String availabilityTiming;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Rating> ratings = new ArrayList<>();
    
    private int educationLevel;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "mentor_subjects",
               joinColumns = @JoinColumn(name = "mentor_id"),
               inverseJoinColumns = @JoinColumn(name = "subject_id"))
    private Set<SubjectEntity> subjects = new HashSet<>();

    private boolean isOnline;
    private long lastOnline;

    private long menteeRequest; // store menteeID else 0
    private long questionRequest; // store questionID else 0

    public Mentor(String username, int educationLevel, String availabilityTiming) {
        this.username = username;
        this.educationLevel = educationLevel;
        this.availabilityTiming = availabilityTiming;
    }
}
