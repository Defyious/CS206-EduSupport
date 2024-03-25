package cs206backend.demo.payload.request;

import lombok.Data;

@Data
public class MatchRequest {
    private long menteeId;
    private long questionId;
}
