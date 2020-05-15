package com.akshat.extras;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.File;

@Component(value = "automatedLogin")
public class AutomatedLogin {

    private static final Logger logger = LoggerFactory.getLogger(AutomatedLogin.class);

    WebDriver driver = null;
    public void initialize(){
        File file = new File("src/main/resources/chromedriver.exe");
        logger.info(file.getAbsolutePath());
        System.setProperty("webdriver.chrome.driver",file.getAbsolutePath());
        driver = new ChromeDriver();
    }

    public void loginToVtop(){
        initialize();
        driver.navigate().to("https://vtop.vit.ac.in");
        driver.manage().window().maximize();
        driver.findElement(By.className("btn-primary")).click();
    }

}
