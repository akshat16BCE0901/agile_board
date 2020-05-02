package com.akshat.jmsPractice;

import com.akshat.jmsPractice.sender.RabbitMQSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.jms.Queue;

@RestController
@RequestMapping("/rest/publish")
public class ProducerResource {

    private final static Logger logger = LoggerFactory.getLogger(ProducerResource.class);

    @Resource(name = "activemqqueue")
    public Queue queue;

    @Resource(name="rabbitMQSender")
    private RabbitMQSender rabbitMQSender;

    @Autowired
    private JmsTemplate jmsTemplate;

    @GetMapping("/{message}")
    public String publishMessage(@PathVariable("message") String message){
        jmsTemplate.convertAndSend(queue,message);
        logger.info("Message has been published to queue");
        return "Message published successfully";
    }

    @GetMapping("/rabbit/{message}")
    public String publishRabbitMQMessage(@PathVariable("message") String message){
        rabbitMQSender.send(message);
        logger.info("Message has been published. The message received is {}",message);
        return "Message has been published and the message is "+message;
    }

}
