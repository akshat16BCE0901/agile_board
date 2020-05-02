package com.akshat.jmsPractice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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


}
