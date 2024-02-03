package cs206backend.demo.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

@Repository
@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom methods if required
}

