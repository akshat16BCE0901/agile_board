package com.akshat.repository;

import com.akshat.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository(value = "EmployeeRepository")
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    @Query(value = "SELECT id,firstname,lastname from employee", nativeQuery = true)
    Map<String,String> findNames();

}
