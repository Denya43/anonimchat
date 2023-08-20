package com.dcpgaming.anonimchat.service.impl;

import com.dcpgaming.anonimchat.dto.ChatRoomDTO;
import com.dcpgaming.anonimchat.model.ChatRoom;
import com.dcpgaming.anonimchat.model.User;
import com.dcpgaming.anonimchat.repository.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;

    @Autowired
    public ChatRoomService(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }

    public void joinChatRoom(String roomId, User user) {
        ChatRoom chatRoom = chatRoomRepository.findByRoomId(roomId)
                .orElseThrow(() -> new IllegalArgumentException("Chat room not found"));

        chatRoom.getParticipants().add(user);
        chatRoomRepository.save(chatRoom);
    }

    public void leaveChatRoom(String roomId, User user) {
        ChatRoom chatRoom = chatRoomRepository.findByRoomId(roomId)
                .orElseThrow(() -> new IllegalArgumentException("Chat room not found"));

        chatRoom.getParticipants().remove(user);
        chatRoomRepository.save(chatRoom);
    }


    public ChatRoom createChatRoom(ChatRoomDTO chatRoomDTO) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.setName(chatRoomDTO.getName());
        chatRoom.setRoomId(generateUniqueId()); // You need to implement this
        return chatRoomRepository.save(chatRoom);
    }

    public List<ChatRoom> getAllChatRooms() {
        return chatRoomRepository.findAll();
    }

    private String generateUniqueId() {
        return UUID.randomUUID().toString().substring(0, 8); // You can adjust the length as needed
    }
}

