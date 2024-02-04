package cs206backend.demo.models;

import jakarta.persistence.*;
import jakarta.persistence.Id;
import java.util.*;

import com.nimbusds.oauth2.sdk.id.Subject;

import cs206backend.demo.models.enums.EducationLevel;
import lombok.*;


@Entity
@Table(name = "question")
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private String imageURL;
    private boolean solved;

    private EducationLevel eduLevel;
    private Subject subject;
    private String topic;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Mentee user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers;


}
