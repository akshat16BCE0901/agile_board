package com.akshat.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true,
        features = "src/test/resources/features",
        glue = {"com.akshat.cucumber","StepDefs"},
        plugin = {"pretty","json:target/cucumber/EmployeeUI.json"},
        tags = "~@ignore")
public class EmployeeUI {

}
