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
    @Column(name = "attendance_id")
    private Integer attendanceID;

    @Column(name = "in_am")
    private LocalDateTime inAM;

    @Column(name = "out_am")
    private LocalDateTime outAM;

    @Column(name = "in_pm")
    private LocalDateTime inPM;

    @Column(name = "out_pm")
    private LocalDateTime outPM;

    @Column(name = "student_id")
    private Integer studentID;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id", insertable = false, updatable = false)
    private Event eventID;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id", insertable = false, updatable = false)
    private Student student;
}
