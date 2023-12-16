package com.sanction.backend_sanction.service;

import com.sanction.backend_sanction.entity.User;
import com.sanction.backend_sanction.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public Optional<String> getUserRole(Integer userId) {
        Optional<User> userOptional = userRepository.findById(userId);

        return userOptional.map(User::getRole);
    }
}
