package com.sanction.backend_sanction.service;

import com.sanction.backend_sanction.dto.SanctionDto;

import java.util.List;

public interface SanctionService {
    void updateSanctionDescription(List<SanctionDto> sanctionDtoList);
}
