package com.sanction.backend_sanction.repository;

import com.sanction.backend_sanction.entity.Sanction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SanctionRepository extends JpaRepository<Sanction, Integer> {
}
