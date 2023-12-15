package com.sanction.backend_sanction.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Attendance {

    @Id
    @Column(name = "attendanceID")
    private Integer attendanceID;

    @Column(name = "inAM")
    private LocalDateTime inAM;

    @Column(name = "outAM")
    private LocalDateTime outAM;

    @Column(name = "inPM")
    private LocalDateTime inPM;

    @Column(name = "outPM")
    private LocalDateTime outPM;

    @Column(name = "studentId")
    private Integer studentID;

    @ManyToOne
    @JoinColumn(name = "eventID", referencedColumnName = "eventID", insertable = false, updatable = false)
    private Event eventID;

    @ManyToOne
    @JoinColumn(name = "studentID", referencedColumnName = "studentID", insertable = false, updatable = false)
    private Student student;
}
