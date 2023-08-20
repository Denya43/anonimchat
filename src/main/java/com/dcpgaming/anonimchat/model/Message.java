package com.dcpgaming.anonimchat.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Message {

    private MessageType type;
    private String content;
    private String sender;
    private String roomId;

    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }
}

