package org.example.project.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.project.conference.entity.Conference;
import org.example.project.seminar.entity.Seminar;
import org.example.project.subcategory.entity.SubCategory;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateDto {
    private String phoneNumber;
    private String image;
    private String name;
    private String email;
    private Set<Seminar> seminars;
    private Set<Conference> conferences;
    private Set<SubCategory> subCategories;
}
