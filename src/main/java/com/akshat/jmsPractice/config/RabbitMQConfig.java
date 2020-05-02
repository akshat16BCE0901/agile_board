package com.akshat.jmsPractice.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class RabbitMQConfig {

    @Bean
    public Queue queue(){
        return new Queue("AKSHAT.MAIL.QUEUE",false);
    }

    @Bean
    public DirectExchange directExchange(){
        return new DirectExchange("MAILEXCHANGE");
    }

    @Bean
    public Binding binding(Queue queue,DirectExchange directExchange){
        return BindingBuilder.bind(queue).to(directExchange).with("MAILROUTINGKEY");
    }

    @Bean(name = "rabbitTemplateBean")
    public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory){
        return new RabbitTemplate(connectionFactory);
    }

}
