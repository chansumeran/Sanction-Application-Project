package com.sanction.backend_sanction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Department {

    @Id
    @Column(name = "deptCode")
    private String departmentCode;

    @Column(name = "deptName")
    private String departmentName;
}
