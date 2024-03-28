package cs206backend.demo.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cs206backend.demo.models.Mentee;
import cs206backend.demo.models.Mentor;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Repository
@Transactional
public interface MentorRepository extends JpaRepository<Mentor, Long> {

    Optional<Mentor> findByUsername(String username);
    Boolean existsByUsername(String username);

    @Query("SELECT m FROM Mentor m WHERE m.lastOnline < :threshold AND m.isOnline = true")
    List<Mentor> findMentorsLastActiveBefore(long threshold);

    List<Mentor> findByEducationLevelGreaterThanAndIsOnlineTrue(int educationLevel);

    List<Mentor> findByIsOnline(boolean online);
}

