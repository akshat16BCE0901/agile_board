package com.akshat.service;

import com.akshat.model.Employee;
import com.akshat.repository.EmployeeRepository;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "EmployeeService")
public class EmployeeService {

    @Resource(name = "EmployeeRepository")
    private EmployeeRepository employeeRepository;

    public Employee add(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAll()
    {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployee(Long id)
    {
        return employeeRepository.findById(id);
    }

    public void deleteEmployee(Long id)
    {
        employeeRepository.deleteById(id);
    }

    public List<JSONObject> getNames()
    {
        List<Object[]> result = employeeRepository.findNames();
        List<JSONObject> namelist = new ArrayList<>();
        for(Object[] obj : result)
        {
            JSONObject jo = new JSONObject();
            jo.put("id",obj[0]);
            jo.put("firstname",obj[1]);
            jo.put("lastname",obj[2]);
            namelist.add(jo);
        }
        return namelist;
    }


}
