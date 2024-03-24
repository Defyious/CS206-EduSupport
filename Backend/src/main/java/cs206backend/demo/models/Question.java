package cs206backend.demo.models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import java.util.*;

import javax.validation.constraints.Null;

import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;
import lombok.*;


@Entity
@Table(name = "question")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    @Lob
    @Column(name = "image", length = 10000)
    private byte[] image;

    private boolean solved;
    private int eduLevel;
    private String subject;
    private boolean isForum;
    private boolean foundMentor;

    private long menteeID;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers;

    public Question(String title, String content, byte[] image, int eduLevel, String subject, Long menteeID, Boolean isForum) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.eduLevel = eduLevel;
        this.subject = subject;
        this.solved = false;
        this.menteeID = menteeID;
        this.isForum = isForum;
    }

    public Question(String title, String content, int eduLevel, String subject, Long menteeID, Boolean isForum) {
        this.title = title;
        this.content = content;
        this.eduLevel = eduLevel;
        this.subject = subject;
        this.solved = false;
        this.menteeID = menteeID;
        this.isForum = isForum;
    }

    public boolean getFound() {
        return foundMentor;
    }

    public boolean isSolved() {
        return solved;
    }

    public boolean isForum() {
        return isForum;
    }
}
