package cs206backend.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class EduSupportBackend {

	public static void main(String[] args) {
		SpringApplication.run(EduSupportBackend.class, args);
	}

}
