package cs206backend.demo.models;

import jakarta.persistence.*;
import java.util.*;

import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import lombok.*;

@Entity
@Table(name = "mentee")
@Data
public class Mentee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private EducationLevel educationLevel;
    private List<Subject> subjects;


    // Constructors, getters, and setters
}
