package cs206backend.demo.models.enums;

public enum EducationLevel {
    PRI_1(1), PRI_2(2), PRI_3(3), PRI_4(4), PRI_5(5), PRI_6(6),
    SEC_1(7), SEC_2(8), SEC_3(9), SEC_4(10), SEC_5(11),
    JC1(12), JC2(13), OTHERS(14);

    private final int value;

    EducationLevel(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public static EducationLevel getENUMEduLevel(String input) {
        if (input == null) {
            return null;
        }
        
        switch (input) {
            case "primary 1": return PRI_1;
            case "primary 2": return PRI_2;
            case "primary 3": return PRI_3;
            case "primary 4": return PRI_4;
            case "primary 5": return PRI_5;
            case "primary 6": return PRI_6;
            case "secondary 1": return SEC_1;
            case "secondary 2": return SEC_2;
            case "secondary 3": return SEC_3;
            case "secondary 4": return SEC_4;
            case "secondary 5": return SEC_5; // Added this line to match the frontend input
            case "jc 1": return JC1;
            case "jc 2": return JC2;
            default: return OTHERS;
        }
    }
}
