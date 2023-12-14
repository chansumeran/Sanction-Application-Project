package com.sanction.backend_sanction.service;

import com.sanction.backend_sanction.entity.Student;

import java.util.List;

public interface StudentService {

    List<Student> getFilteredStudents(String deptCode, String course, String yearLevel);

    List<Student> getStudentsByEvent(String eventName);
}
