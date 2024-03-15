package cs206backend.demo.models.enums;

public enum EducationLevel {
    PRI_1, PRI_2, PRI_3, PRI_4, PRI_5, PRI_6, SEC_1, SEC_2, SEC_3, SEC_4, JC1, JC2, OTHERS;

    public static EducationLevel getENUMEduLevel(String input) {
        if (input == null) {
            return null;
        }
        
        input = input.toLowerCase().replaceAll("\\s", ""); 
        if (input.startsWith("primary")) {
            int number = Integer.parseInt(input.replaceAll("\\D+", "")); 
            return EducationLevel.valueOf("PRI_" + number);
        } else if (input.startsWith("secondary")) {
            int number = Integer.parseInt(input.replaceAll("\\D+", ""));
            return EducationLevel.valueOf("SEC_" + number);
        } else if (input.startsWith("juniorcollege")) {
            int number = Integer.parseInt(input.replaceAll("\\D+", ""));
            return EducationLevel.valueOf("JC" + number);
        } else {
            return OTHERS;
        }
    }
}
