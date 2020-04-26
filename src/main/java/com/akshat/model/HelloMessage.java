package com.akshat.model;

public class HelloMessage {

    private String name;
    private String message;

    public HelloMessage(){

    }

    public HelloMessage(String name, String message) {
        this.name = name;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}