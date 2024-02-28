package cs206backend.demo.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "mentor_mentee")
@Data
public class MentorMentee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "mentor_id")
    private Mentor mentor;

    @ManyToOne
    @JoinColumn(name = "mentee_id")
    private Mentee mentee;
}
