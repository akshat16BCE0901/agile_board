package com.akshat.repository;

import com.akshat.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "EmployeeRepository")
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    @Query(value = "SELECT id,firstname,lastname from employee", nativeQuery = true)
    List<Object[]> findNames();

}
