package com.akshat.mailsender.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({MailConfig.class})
public class ApplicationConfig {

}
