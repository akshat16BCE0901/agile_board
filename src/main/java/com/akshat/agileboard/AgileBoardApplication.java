package com.akshat.agileboard;

import com.akshat.extras.AutomatedLogin;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.io.File;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan("com.akshat.model")
@EnableJpaRepositories(value = "com.akshat.repository")
@PropertySource("classpath:database.properties")
public class AgileBoardApplication extends SpringBootServletInitializer {

    private static final Logger logger = LoggerFactory.getLogger(AgileBoardApplication.class);

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(AgileBoardApplication.class);
    }



    public static void main(String[] args) {
        System.out.println("       _     _\n" +
                " _____| |  _| |  _  _    _____\n" +
                "|  _  | |_/ | |_/ |(_)  |  _  |_ __ _ __ \n" +
                "| |_| |    /|    / | |  | |_| | '_ | '_ \\\n" +
                "|  _  |    \\|    \\ | |  |  _  | |_)| |_) |\n" +
                "|_| |_|_|\\__|_|\\__\\|_|  |_| |_| .__| .__/\n" +
                "                              |_|  |_| ");

        SpringApplication.run(AgileBoardApplication.class, args);
    }

}

@Configuration
class WebConfig implements WebMvcConfigurer
{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{spring:\\w+}")
                .setViewName("forward:/");
        registry.addViewController("/**/{spring:\\w+}")
                .setViewName("forward:/");
        registry.addViewController("/{spring:\\w+}/**{spring:?!(\\.js|\\.css)$}")
                .setViewName("forward:/");
    }
}

@Configuration
@EnableWebSocketMessageBroker
class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/myendpoint").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }


}
