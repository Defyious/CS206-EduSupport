package cs206backend.demo.payload.request;

import java.util.List;

import javax.validation.constraints.Size;

import lombok.Data;


@Data
public class MentorRegRequest {
    @Size(min = 3, max = 20)
    private String username;
    private String educationLevel;
    private String availabilityTiming;
    private List<String> subjects;
}
