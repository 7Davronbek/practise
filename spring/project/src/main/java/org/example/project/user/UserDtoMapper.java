package org.example.project.user;

import lombok.RequiredArgsConstructor;
import org.example.project.common.mapper.GenericMapper;
import org.example.project.user.dto.UserCreateDto;
import org.example.project.user.dto.UserResponseDto;
import org.example.project.user.dto.UserUpdateDto;
import org.example.project.user.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserDtoMapper extends GenericMapper<User, UserCreateDto, UserResponseDto, UserUpdateDto> {
    private final ModelMapper modelMapper;

    @Override
    public User toEntity(UserCreateDto userCreateDto) {
        return modelMapper.map(userCreateDto, User.class);
    }

    @Override
    public UserResponseDto toResponseDto(User user) {
        return modelMapper.map(user, UserResponseDto.class);
    }

    @Override
    public void toEntity(UserUpdateDto userUpdateDto, User user) {
        modelMapper.map(userUpdateDto, user);
    }
}
