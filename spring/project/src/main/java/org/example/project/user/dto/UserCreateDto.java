package org.example.project.user.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateDto {
    @NotBlank
    private String phoneNumber;
    @NotBlank
    private String password;
    private String image;
    @NotBlank
    private String name;
    private String email;
}
