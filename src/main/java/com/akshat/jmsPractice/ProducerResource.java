package com.akshat.jmsPractice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.jms.Queue;

@RestController
@RequestMapping("/rest/publish")
public class ProducerResource {

    private final static Logger logger = LoggerFactory.getLogger(ProducerResource.class);

    @Resource(name = "activemqqueue")
    public Queue queue;

    @Autowired
    private JmsTemplate jmsTemplate;

    @GetMapping("/{message}")
    public String publishMessage(@PathVariable("message") String message){
        jmsTemplate.convertAndSend(queue,message);
        logger.info("Message has been published to queue");
        return "Message published successfully";
    }

}
