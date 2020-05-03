package com.akshat.jmsPractice.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class RabbitMQConfig {

    @Bean(name = "mail1Queue")
    public Queue mail1Queue(){
        return new Queue("AKSHAT.MAIL1.QUEUE",false);
    }

    @Bean(name = "mail2Queue")
    public Queue mail2Queue(){
        return new Queue("AKSHAT.MAIL2.QUEUE",false);
    }


    @Bean
    public TopicExchange topicExchange(){
        return new TopicExchange("TOPICEXCHANGE");
    }

    @Bean
    public Binding binding1(@Qualifier("mail1Queue") Queue queue, TopicExchange topicExchange){
        return BindingBuilder.bind(queue).to(topicExchange).with("routing_key_1");
    }


    @Bean
    public Binding binding2(@Qualifier("mail1Queue") Queue queue,TopicExchange topicExchange){
        return BindingBuilder.bind(queue).to(topicExchange).with("routing_key_2");
    }

    @Bean
    public Binding binding3(@Qualifier("mail2Queue") Queue queue,TopicExchange topicExchange){
        return BindingBuilder.bind(queue).to(topicExchange).with("routing_key_3");
    }

    @Bean(name = "rabbitTemplateBean")
    public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory){
        return new RabbitTemplate(connectionFactory);
    }

}
