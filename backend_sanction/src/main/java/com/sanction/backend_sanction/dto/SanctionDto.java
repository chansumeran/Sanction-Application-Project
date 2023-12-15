package com.sanction.backend_sanction.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SanctionDto {
    private Integer sanctionId;
    private String description;
    private Integer frequency;
}
