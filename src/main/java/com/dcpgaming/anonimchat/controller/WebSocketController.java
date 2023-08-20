package com.dcpgaming.anonimchat.controller;

import com.dcpgaming.anonimchat.model.MessageDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/sendMessage")
    @SendTo("/topic/chat") // Broadcasting the message to all subscribers of this topic
    public MessageDTO sendMessage(MessageDTO message) {
        // Process the message, update database, etc.
        return new MessageDTO("Hello, " + message.getSender() + "!"); // Return the message object
    }
}
