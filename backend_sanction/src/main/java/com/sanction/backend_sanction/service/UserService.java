package com.sanction.backend_sanction.service;

import java.util.Optional;

public interface UserService {
    Optional<String> getUserRole(Integer userId);
}
