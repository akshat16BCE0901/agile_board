package com.akshat.mailsender.senders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

public class SendWithoutAttachments {

    @Autowired
    JavaMailSender javaMailSender;

    String to;
    String subject;
    String message;

    public SendWithoutAttachments() {

    }

    public SendWithoutAttachments(String to, String subject, String message) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void sendMail() throws MessagingException {
        MimeMessage mimeMessage  = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,false);
        mimeMessageHelper.setTo(getTo());
        mimeMessageHelper.setSubject(getSubject());
        mimeMessageHelper.setText(getMessage());
        javaMailSender.send(mimeMessage);
    }

}
