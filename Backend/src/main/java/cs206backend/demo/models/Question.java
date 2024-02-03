package cs206backend.demo.models;
import javax.persistence.*;
import java.util.*;
import lombok.*;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Constructors, getters, and setters
}
