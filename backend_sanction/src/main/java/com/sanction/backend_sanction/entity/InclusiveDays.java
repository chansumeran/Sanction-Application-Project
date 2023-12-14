package com.sanction.backend_sanction.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class InclusiveDays {

    @Id
    @Column(name = "dayID")
    private Integer dayID;

    @Column(name = "dayNum")
    private Integer dayNum;

    @Column(name = "dayName")
    private String dayName;

    private LocalDate date;

    @Column(name = "eventID")
    private Integer eventID;

    @ManyToOne
    @JoinColumn(name = "eventID", referencedColumnName = "eventID", insertable = false, updatable = false)
    private Event event;

}
