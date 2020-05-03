package com.akshat.jmsPractice.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class RabbitMQConfig {

    @Bean(name = "mailQueue")
    public Queue mailQueue(){
        return new Queue("AKSHAT.MAIL.QUEUE",false);
    }

    @Bean(name = "topicQueue")
    public Queue topicQueue(){
        return new Queue("AKSHAT.TOPIC.QUEUE",false);
    }

    @Bean
    public DirectExchange directExchange(){
        return new DirectExchange("MAILEXCHANGE");
    }

    @Bean
    public TopicExchange topicExchange(){
        return new TopicExchange("TOPICEXCHANGE");
    }

    @Bean
    public Binding directBinding(@Qualifier("mailQueue") Queue queue, DirectExchange directExchange){
        return BindingBuilder.bind(queue).to(directExchange).with("MAILROUTINGKEY");
    }

    @Bean
    public Binding topicBinding(@Qualifier("topicQueue") Queue queue,TopicExchange topicExchange){
        return BindingBuilder.bind(queue).to(topicExchange).with("TOPICEXCHANGEROUTINGKEY");
    }

    @Bean(name = "rabbitTemplateBean")
    public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory){
        return new RabbitTemplate(connectionFactory);
    }

}
