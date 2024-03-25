package cs206backend.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import cs206backend.demo.models.SubjectEntity;

public interface SubjectRepository extends JpaRepository<SubjectEntity, Long> {

    Optional<SubjectEntity> findByName(String name);

}

