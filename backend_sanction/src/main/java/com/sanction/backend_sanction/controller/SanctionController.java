package com.sanction.backend_sanction.controller;

import com.sanction.backend_sanction.dto.SanctionDto;
import com.sanction.backend_sanction.service.SanctionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sanctions")
public class SanctionController {

    @Autowired
    private SanctionServiceImpl sanctionService;

    
}
