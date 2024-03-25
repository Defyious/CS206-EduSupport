package cs206backend.demo.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PingResponse {
    private long menteeId;
    private long questionId;
}
