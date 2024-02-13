package org.example.project.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.project.conference.entity.Conference;
import org.example.project.seminar.entity.Seminar;
import org.example.project.subcategory.entity.SubCategory;
import org.example.project.user.entity.UserRole;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
    private UUID id;
    private String phoneNumber;
    private String image;
    private String name;
    private String email;
    private UserRole role;
    private LocalDateTime created;
    private LocalDateTime updated;

    private Set<Seminar> seminars;

    private Set<Conference> conferences;

    private Set<SubCategory> subCategories;
}
