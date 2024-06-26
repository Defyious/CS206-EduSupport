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

    private int educationLevel;

    private boolean isPremium;

    @ElementCollection
    private List<Long> mentorIds = new ArrayList<>();
    
    @OneToMany(mappedBy = "mentee", cascade = CascadeType.ALL)
    private List<MentorMentee> mentorMentees;

    public Mentee(String username, int educationLevel, boolean isPremium) {
        this.username = username;
        this.educationLevel = educationLevel;
        this.isPremium = isPremium;
    }

}
