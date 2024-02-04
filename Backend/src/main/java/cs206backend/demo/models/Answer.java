package cs206backend.demo.models;

import jakarta.persistence.*;
import jakarta.persistence.Id;

import java.util.*;
import lombok.*;

@Entity
@Table(name = "answer")
@Data
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Mentor mentor;

    // Constructors, getters, and setters
}
