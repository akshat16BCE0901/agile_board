package com.akshat.cucumber;

import com.akshat.agileboard.AgileBoardApplication;
import com.akshat.agileboard.AgileBoardApplicationTests;
import com.codeborne.selenide.WebDriverRunner;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ContextConfiguration;

import java.io.File;
import java.net.HttpURLConnection;
import static com.codeborne.selenide.Configuration.baseUrl;
import static com.codeborne.selenide.Selenide.open;

import java.net.URL;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, classes = AgileBoardApplication.class)
@ContextConfiguration(classes = AgileBoardApplication.class)
public class Stepdefs {

    public final static Logger logger = LoggerFactory.getLogger(Stepdefs.class);
    WebDriver webDriver = null;
    public Stepdefs() {
        File file = new File("src/test/resources/chromedriver.exe");
        logger.info(file.getAbsolutePath());
        System.setProperty("webdriver.chrome.driver",file.getAbsolutePath());
        webDriver = new ChromeDriver();
        WebDriverRunner.setWebDriver(webDriver);
        logger.info("Chrome web driver path is set to --- {}",System.getProperty("webdriver.chrome.driver"));
        logger.info("Webdriver is set to --- {}",webDriver);
        setup();
    }

    public void setup() {
        int count = 0;
        baseUrl  = "http://localhost:8084";

        while(getResponseCode(baseUrl)!=200 && count<50){
            try{
                count++;
                Thread.currentThread().sleep(600);
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        logger.info("Opening home page");
        open("/");
    }

    public int getResponseCode(String url){
        try{
            URL uri = new URL(url);
            HttpURLConnection httpURLConnection = (HttpURLConnection) uri.openConnection();
            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.connect();
            logger.info("Response code received is ==== {}",httpURLConnection.getResponseCode());
            return httpURLConnection.getResponseCode();
        }catch (Exception e){
            logger.error("Exception occured ==== {}",e);
            e.printStackTrace();
        }
        return 404;

    }

    public void loadWebPage(){
        logger.info("WebPage loading");
    }

    @And("^the menus are visible$")
    public void the_menus_are_available(){
        loadWebPage();
    }

    @When("^the user clicks on the \"([^\"]*)\" Dropdown$")
    public void theUserClicksOnTheDropdown(String menu) throws Throwable {
        logger.info("Dropdown is being clicked ===== {}",menu);
    }
}
