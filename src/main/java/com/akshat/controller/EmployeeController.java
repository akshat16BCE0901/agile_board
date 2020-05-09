package com.akshat.controller;

import com.akshat.model.Employee;
import com.akshat.service.EmployeeService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Resource(name = "EmployeeService")
    private EmployeeService employeeService;

    @PostMapping(value = "/add")
    public Employee addEmployee(@RequestBody Employee employee)
    {
        return employeeService.add(employee);
    }

    @GetMapping(value = "/addget")
    public Employee addemp()
    {
        Employee employee = new Employee("Akshat","Singhal","612, Jawahar Colony, New Mandi, Muzaffarnagar","+919629000816","akshat.yash@rediffmail.com","1998-12-16","akki"+Math.floor(Math.random()*100), "akshat");
        return employeeService.add(employee);
    }

    @GetMapping(value = "/viewall")
    public List<Employee> getAllEmployees()
    {
        return employeeService.getAll();
    }

    @GetMapping(value = "/view/{id}")
    public Optional<Employee> getEmployee(@PathVariable(value = "id") Long id)
    {
        return employeeService.getEmployee(id);
    }

    @GetMapping(value = "/getnames")
    public List<JSONObject> findNames() throws JsonProcessingException {
        return employeeService.getNames();
    }

    @DeleteMapping(value = "/delete/{id}")
    public void deleteEmployee(@PathVariable(value = "id") Long id)
    {
        employeeService.deleteEmployee(id);
    }

    @GetMapping(value = "deleteget/{id}")
    public void deleteEmp(@PathVariable(value = "id") Long id){
        employeeService.deleteEmployee(id);
    }



}
