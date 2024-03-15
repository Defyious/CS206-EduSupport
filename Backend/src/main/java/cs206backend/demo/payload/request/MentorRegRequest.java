package cs206backend.demo.payload.request;

import java.util.List;

import javax.validation.constraints.Size;

import cs206backend.demo.models.enums.Subject;
import lombok.Data;


@Data
public class MentorRegRequest {
    @Size(min = 3, max = 20)
    private String username;
    private String educationLevel;
    private List<String> subjects;
}
