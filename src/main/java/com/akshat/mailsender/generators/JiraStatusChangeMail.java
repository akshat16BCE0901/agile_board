package com.akshat.mailsender.generators;


public class JiraStatusChangeMail {

    String to;
    String message;

    public JiraStatusChangeMail() {

    }

    public JiraStatusChangeMail(String to, String message) {
        super();
        this.to = to;
        this.message = message;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "JiraStatusChangeMail{" +
                "to='" + to + '\'' +
                ", message='" + message + '\'' +
                '}';
    }

    public void make_message(String oldStatus, String newStatus, Long jiraId)
    {
        String msg= "<h2>Jira Status Update</h2>\n" +
                "<p>\n" +
                "\t<b>Jira ID : </b>"+jiraId+"\n" +
                "\t<b>Earlier Status : </b>"+oldStatus+"\n" +
                "\t<b>Updated Status : </b>"+newStatus+"\n" +
                "\t<b>Updated By : </b>Akshat Singhal\n" +
                "</p>\n";

        setMessage(msg);
    }
}
