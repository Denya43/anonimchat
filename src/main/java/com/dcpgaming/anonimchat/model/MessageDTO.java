package com.dcpgaming.anonimchat.model;

public class MessageDTO {
    private String content;
    private String sender;

    public MessageDTO(String s) {
        this.content = s;
        this.sender = "Server";
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
}

