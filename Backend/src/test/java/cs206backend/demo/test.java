package cs206backend.demo;


import cs206backend.demo.models.enums.EducationLevel;
import cs206backend.demo.models.enums.Subject;

public class test {
    public static void main(String[] args) {
        System.out.println(EducationLevel.getENUMEduLevel("primary 2"));
        System.out.println(Subject.getENUMSubject("chemistry"));
    }
}
