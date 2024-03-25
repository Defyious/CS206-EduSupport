package cs206backend.demo.payload.request;

import lombok.Data;

import javax.validation.constraints.*;

@Data
public class MenteeRegRequest {

    @Size(min = 3, max = 20)
    private String username;
    private String educationLevel;
    private String isPremium;
    
}