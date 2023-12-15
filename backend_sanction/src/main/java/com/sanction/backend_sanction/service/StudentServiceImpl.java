package com.sanction.backend_sanction.service;

import com.sanction.backend_sanction.entity.Student;
import com.sanction.backend_sanction.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> getFilteredStudents(String deptCode, String course, String yearLevel) {
        return studentRepository.findByDynamicFilters(deptCode, course, yearLevel);
    }

    @Override
    public List<Student> getStudentsByEvent(String eventName) {
        return studentRepository.findByEventFilter(eventName);
    }

    @Override
    public Optional<Student> getStudentWithSanction(int studentID) {
        return studentRepository.findById(studentID);
    }
}