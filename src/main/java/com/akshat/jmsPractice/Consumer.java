package com.akshat.jmsPractice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component(value = "MessageConsumer")
public class Consumer {

    private static final Logger logger = LoggerFactory.getLogger(Consumer.class);

    @JmsListener(destination = "AKSHAT.QUEUE")
    public void listener(String message)
    {
        logger.info("Message received by Consumer class is - {} ",message);
    }

    @RabbitListener(queues = {"AKSHAT.MAIL1.QUEUE"})
    public void listenToMailQueue(String message)
    {
        logger.info("Message has been consumed by method listenToMailQueue and message is {}",message);
    }

    @RabbitListener(queues = {"AKSHAT.MAIL2.QUEUE","AKSHAT.MAIL1.QUEUE"})
    public void listenToMailQueue2(String message)
    {
        logger.info("Message has been consumed by method listenToMailQueue2 and message is {}",message);
    }

}
