package cs206backend.demo.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuestionResponse {
    private long questionId;
    private String title;
    private String content;
    private String eduLevel;
    private String subject;
    private long menteeID;
}
