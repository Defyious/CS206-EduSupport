package cs206backend.demo.models.enums;

import java.util.HashMap;
import java.util.Map;

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
            case "Primary 1": return PRI_1;
            case "Primary 2": return PRI_2;
            case "Primary 3": return PRI_3;
            case "Primary 4": return PRI_4;
            case "Primary 5": return PRI_5;
            case "Primary 6": return PRI_6;
            case "Secondary 1": return SEC_1;
            case "Secondary 2": return SEC_2;
            case "Secondary 3": return SEC_3;
            case "Secondary 4": return SEC_4;
            case "Secondary 5": return SEC_5;
            case "JC 1": return JC1;
            case "JC 2": return JC2;
            default: return OTHERS;
        }
    }

    private static final Map<Integer, EducationLevel> valueToLevelMap = new HashMap<>();

    static {
        for (EducationLevel level : EducationLevel.values()) {
            valueToLevelMap.put(level.getValue(), level);
        }
    }

    public static EducationLevel fromInt(int value) {
        return valueToLevelMap.get(value);
    }

    // toString method to return the enum as a readable string, assuming lowercase with a space is desired
    @Override
    public String toString() {
        switch(this) {
            case PRI_1: return "primary 1";
            case PRI_2: return "primary 2";
            case PRI_3: return "primary 3";
            case PRI_4: return "primary 4";
            case PRI_5: return "primary 5";
            case PRI_6: return "primary 6";
            case SEC_1: return "secondary 1";
            case SEC_2: return "secondary 2";
            case SEC_3: return "secondary 3";
            case SEC_4: return "secondary 4";
            case SEC_5: return "secondary 5";
            case JC1: return "jc 1";
            case JC2: return "jc 2";
            default: return "others";
        }
    }
}
