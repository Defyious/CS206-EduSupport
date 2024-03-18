package cs206backend.demo.payload.request;

import lombok.Data;

@Data
public class StatusUpdateRequest {
    private long userID;
    private boolean isOnline;
}
