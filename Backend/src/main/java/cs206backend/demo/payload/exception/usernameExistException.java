package cs206backend.demo.payload.exception;

public class usernameExistException extends RuntimeException{ 
    public usernameExistException() {
        super("Username already exist");
    }
}
