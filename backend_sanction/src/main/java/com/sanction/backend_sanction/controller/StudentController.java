package com.sanction.backend_sanction.controller;

import com.sanction.backend_sanction.entity.Student;
import com.sanction.backend_sanction.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TransferQueue;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentServiceImpl studentService;

    // ADVANCED FILTER
    @GetMapping("/advance_filter")
    public ResponseEntity<List<Student>> getAdvanceFilteredStudents(
            @RequestParam(name = "deptCode", required = false) String deptCode,
            @RequestParam(name = "course", required = false) String course,
            @RequestParam(name = "yearLevel", required = false) String yearLevel) {
        List<Student> students = studentService.getFilteredStudents(deptCode, course, yearLevel);
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/event_filter")
    public ResponseEntity<List<Student>> getEventFilteredStudents(
            @RequestParam(name = "eventName", required = false) String eventName) {
        List<Student> studentsByEvent = studentService.getStudentsByEvent(eventName);
        return new ResponseEntity<>(studentsByEvent, HttpStatus.OK);
    }
}
