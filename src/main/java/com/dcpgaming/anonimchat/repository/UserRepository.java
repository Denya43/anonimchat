package com.dcpgaming.anonimchat.repository;

import com.dcpgaming.anonimchat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
