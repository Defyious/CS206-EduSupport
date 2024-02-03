package cs206backend.demo.models;
import javax.persistence.*;
import java.util.*;
import lombok.*;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Constructors, getters, and setters
}
