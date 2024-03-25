package cs206backend.demo.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cs206backend.demo.models.Answer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Repository
@Transactional
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    // Methods to find answers, for example by question
    List<Answer> findByQuestionId(Long questionId);
}

