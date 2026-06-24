package com.example.experiment;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final EmployeeRepository employeeRepository;

    public DataLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void run(String... args) {
        employeeRepository.save(new Employee("Rohan Mehta", "IT", 65000));
        employeeRepository.save(new Employee("Sneha Patil", "HR", 52000));
    }
}
