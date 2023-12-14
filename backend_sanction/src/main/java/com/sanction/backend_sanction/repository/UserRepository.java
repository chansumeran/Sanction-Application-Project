package com.sanction.backend_sanction.repository;

import com.sanction.backend_sanction.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
