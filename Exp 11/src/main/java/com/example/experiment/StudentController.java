package com.example.experiment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final List<Student> students = new ArrayList<>();

    public StudentController() {
        students.add(new Student(1, "Amit Kumar", "Computer Science", 87));
        students.add(new Student(2, "Neha Singh", "Web Designing", 91));
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping
    public List<Student> getStudents() {
        return students;
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        students.add(student);
        return student;
    }
}
