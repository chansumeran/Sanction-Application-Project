package com.sanction.backend_sanction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Event {

    @Id
    @Column(name = "eventID")
    private Integer eventID;

    @Column(name = "eventName")
    private String eventName;

    @Column(name = "eventDate")
    private LocalDate eventDate;

    @Column(name = "eventTime")
    private Time eventTime;

}
