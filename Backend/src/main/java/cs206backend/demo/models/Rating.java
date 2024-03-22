package cs206backend.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;

    @Column(nullable = true)
    private String comments;

    @ManyToOne
    @JoinColumn(name = "mentor_id")
    @JsonBackReference
    private Mentor mentor;

    // Constructors, Getters, and Setters
    public Rating() {}

    public Rating(int rating, String comments, Mentor mentor) {
        this.rating = rating;
        this.comments = comments;
        this.mentor = mentor;
    }
}