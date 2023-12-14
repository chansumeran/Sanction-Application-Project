package com.sanction.backend_sanction.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Student {

    @Id
    @Column(name = "studentID")
    private Integer studentId;

    @Column(name = "fName")
    private String firstName;

    @Column(name = "lName")
    private String lastName;

    @Column(name = "middleInitial")
    private String middleInitial;

    private String sex;

    @Column(name = "deptCode")
    private String departmentCode;

    private String course;

    @Column(name = "yearlvl")
    private Integer yearLevel;

    @Column(name = "ifOfficer")
    private Boolean isOfficer;

    @Column(name = "sanctionID")
    private Integer sanctionId;

    @ManyToOne
    @JoinColumn(name = "deptCode", referencedColumnName = "deptCode", insertable = false, updatable = false, nullable = false)
    private Department department;

    @ManyToOne
    @JoinColumn(name = "sanctionID", referencedColumnName = "sanctionID", insertable = false, updatable = false)
    private Sanction sanction;
}
