package cs206backend.demo.models;

import jakarta.persistence.*;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Entity
@Table(name = "answer")
@Data
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private long questionId;

    @Lob
    @Column(name = "image", length = 10000)
    private byte[] image;

    public Answer(String content, byte[] image, long question) {
        this.content = content;
        this.image = image;
        this.questionId = question;
    }

    public Answer(String content, long question) {
        this.content = content;
        this.questionId = question;
    }
}
