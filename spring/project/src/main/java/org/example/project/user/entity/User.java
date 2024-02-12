package org.example.project.user.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "`user`")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    private UUID id;
    private String phoneNumber;
    private String password;
    private String image;
    private String name;
    private String email;
    @Enumerated(EnumType.STRING)
    private Role role;
    @CreatedDate
    private LocalDateTime created;
    @LastModifiedDate
    private LocalDateTime updated;
}
