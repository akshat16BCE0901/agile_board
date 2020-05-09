package com.akshat.service;

import com.akshat.model.Employee;
import com.akshat.repository.EmployeeRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "EmployeeService")
public class EmployeeService {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeService.class);

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

    public List<JSONObject> getNames() throws JsonProcessingException {
        List<Object[]> result = employeeRepository.findNames();
        List<JSONObject> namelist = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();

        for(Object[] obj : result)
        {
            String objAsString = objectMapper.writeValueAsString(obj);
            logger.info(objAsString);
            JSONObject jo = new JSONObject();
            jo.put("id",obj[0]);
            jo.put("firstname",obj[1]);
            jo.put("lastname",obj[2]);
            namelist.add(jo);
        }
        return namelist;
    }


}
