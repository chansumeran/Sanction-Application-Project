package com.sanction.backend_sanction.controller;

import com.sanction.backend_sanction.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/{userId}")
    public Boolean isAdmin(@PathVariable Integer userId) {
        Optional<String> userRole = userService.getUserRole(userId);

        return userRole.isPresent() && "admin".equals(userRole.get());
    }
}
