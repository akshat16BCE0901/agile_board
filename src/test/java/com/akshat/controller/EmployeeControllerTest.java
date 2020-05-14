package com.akshat.controller;


import com.akshat.agileboard.AgileBoardApplication;
import com.akshat.model.Employee;
import com.akshat.service.EmployeeService;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, classes = AgileBoardApplication.class)
@AutoConfigureMockMvc
public class EmployeeControllerTest{

    private static final Logger logger = LoggerFactory.getLogger(EmployeeControllerTest.class);

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeService employeeService;

    @Test
    public void testGetAllEmployees() throws Exception {
        Employee employee = new Employee("Test","Test","Test","+919629000XXX","Test","XXXX-XX-XX","Test", "Test");
        List<Employee> allEmployees = Arrays.asList(employee);
        logger.info("All employees ==== "+allEmployees.toString());
        Mockito.when(employeeService.getAll()).thenReturn(allEmployees);
        mockMvc.perform(get("/employee/viewall"))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$[0].firstname",Matchers.is("Test")))
                .andExpect(jsonPath("$[0].lastname",Matchers.is("Test")))
                .andExpect(jsonPath("$[0].phone",Matchers.is("+919629000XXX")))
                .andExpect(jsonPath("$[0].email",Matchers.is("Test")))
                .andExpect(jsonPath("$[0].date_of_birth",Matchers.is("XXXX-XX-XX")))
                .andExpect(jsonPath("$[0].username",Matchers.is("Test")))
                .andExpect(jsonPath("$[0].password",Matchers.is("Test")));
    }

    @Test
    public void testGetEmployeeByID() throws Exception {
        Employee employee = new Employee("Test","Test","Test","+919629000XXX","Test","XXXX-XX-XX","Test", "Test");
        Optional<Employee> employee1 = Optional.of(employee);
        logger.info("Optional employee object created is ======>> {}",employee1);
        Mockito.when(employeeService.getEmployee(any())).thenReturn(employee1);
        mockMvc.perform(get("/employee/view/1"))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.firstname",Matchers.is("Test")))
                .andExpect(jsonPath("$.lastname",Matchers.is("Test")))
                .andExpect(jsonPath("$.phone",Matchers.is("+919629000XXX")))
                .andExpect(jsonPath("$.email",Matchers.is("Test")))
                .andExpect(jsonPath("$.date_of_birth",Matchers.is("XXXX-XX-XX")))
                .andExpect(jsonPath("$.username",Matchers.is("Test")))
                .andExpect(jsonPath("$.password",Matchers.is("Test")));

    }
}