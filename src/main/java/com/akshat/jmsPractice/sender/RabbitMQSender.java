package com.akshat.jmsPractice.sender;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service(value = "rabbitMQSender")
public class RabbitMQSender {

    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQSender.class);

    @Resource(name = "rabbitTemplateBean")
    private AmqpTemplate rabbitTemplate;

    public void send(String message){
        rabbitTemplate.convertAndSend("TOPICEXCHANGE","routing_key_1",message);
        LOGGER.info("Message has been sent to direct. The message was {}",message);
    }
}
