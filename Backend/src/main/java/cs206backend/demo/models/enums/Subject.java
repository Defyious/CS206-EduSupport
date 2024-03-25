package cs206backend.demo.models.enums;

public enum Subject {
    MATH, SCIENCE, ENGLISH, CHINESE, MALAY, TAMIL, HISTORY, GEOGRAPHY, CHEMISTRY, BIOLOGY, PHYSIC, SOCIAL_STUDIES, LITERATURE, COMPUTING; 
    // Add more subjects as needed

    public static Subject getENUMSubject(String input) {
        if (input != null) {
            for (Subject b : Subject.values()) {
                if (input.equalsIgnoreCase(b.name())) {
                    return b;
                }
            }
        } return null;
    }
}
