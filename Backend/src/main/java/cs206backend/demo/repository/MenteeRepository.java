package cs206backend.demo.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cs206backend.demo.models.Mentee;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Repository
@Transactional
public interface MenteeRepository extends JpaRepository<Mentee, Long>{
    
    Optional<Mentee> findByUsername(String username);
    
} 