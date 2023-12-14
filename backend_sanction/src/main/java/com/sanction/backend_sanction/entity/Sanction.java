package com.sanction.backend_sanction.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Sanction {

    @Id
    private Integer sanctionId;
    private String description;
    private Integer frequency;
}
