package com.sanction.backend_sanction.service;

import com.sanction.backend_sanction.dto.SanctionDto;
import com.sanction.backend_sanction.entity.Sanction;
import com.sanction.backend_sanction.repository.SanctionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SanctionServiceImpl implements SanctionService {

    @Autowired
    private SanctionRepository sanctionRepository;

    @Override
    @Transactional
    public void updateSanctionDescription(List<SanctionDto> sanctionDtoList) {
        for (SanctionDto dto : sanctionDtoList) {
            Optional<Sanction> optionalSanction = sanctionRepository.findById(dto.getSanctionId());
            if (optionalSanction.isPresent()) {
                Sanction sanction = optionalSanction.get();
                sanction.setDescription(dto.getDescription());
                sanctionRepository.save(sanction);
            } else {
                throw new RuntimeException("Sanction not found with ID: " + dto.getSanctionId());
            }
        }
    }
}
