package cs206backend.demo.models;

import jakarta.persistence.*;

import java.util.*;

import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
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

    @Lob
    private byte[] image;
    private boolean solved;

    private EducationLevel eduLevel;
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "mentee_id")
    private Mentee mentee;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers;

}
