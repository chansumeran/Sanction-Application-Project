package com.sanction.backend_sanction.repository;

import com.sanction.backend_sanction.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    // ADVANCED FILTER
    @Query(value = "SELECT s.* FROM student s JOIN Department d ON s.deptCode = d.deptCode WHERE (:deptCode IS NULL OR d.deptCode = :deptCode) AND (:course IS NULL OR s.course = :course) AND (:yearLevel IS NULL OR s.yearlvl = :yearLevel)", nativeQuery = true)
    List<Student> findByDynamicFilters(@Param("deptCode") String deptCode, @Param("course") String course, @Param("yearLevel") String yearLevel);

    // FILTER BY EVENT
    @Query(value = "SELECT student.* " +
            "FROM student " +
            "JOIN attendance ON student.studentID = attendance.studentID " +
            "JOIN inclusivedays ON inclusivedays.dayID = attendance.dayID " +
            "JOIN event ON event.eventID = inclusivedays.eventID " +
            "WHERE event.eventName = :eventName", nativeQuery = true)
    List<Student> findByEventFilter(String eventName);
}
