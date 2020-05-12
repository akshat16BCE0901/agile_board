package com.akshat.controller;


import com.akshat.agileboard.AgileBoardApplication;
import com.akshat.model.Employee;
import com.akshat.service.EmployeeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.junit.Assert.assertTrue;
import org.hamcrest.Matchers;
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
//        EmployeeService employeeService = Mockito.mock(EmployeeService.class);
        logger.info("All employees ==== "+allEmployees.toString());
        Mockito.when(employeeService.getAll()).thenReturn(allEmployees);
        logger.info("Employee Service returns====" + employeeService.getAll());
        mockMvc.perform(get("/employee/viewall"))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$[0].firstname",Matchers.is(employee.getFirstname())))
                .andExpect(jsonPath("$[0].lastname",Matchers.is(employee.getLastname())));
    }
}