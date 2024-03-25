package cs206backend.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cs206backend.demo.models.Mentor;
import cs206backend.demo.models.Rating;
import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    
    List<Rating> findByMentor(Mentor mentor);

    List<Rating> findByMentorId(Long mentorId);
}
