package org.example.project.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.example.project.common.service.GenericService;
import org.example.project.user.dto.UserCreateDto;
import org.example.project.user.dto.UserResponseDto;
import org.example.project.user.dto.UserUpdateDto;
import org.example.project.user.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Getter
@RequiredArgsConstructor
public class UserService extends GenericService<User, UUID, UserResponseDto, UserCreateDto, UserUpdateDto> implements UserDetailsService {
    private final UserRepository repository;
    private final Class<User> entityClass = User.class;
    private final UserDtoMapper mapper;
    private final PasswordEncoder passwordEncoder;
    @Override
    protected UserResponseDto internalCreate(UserCreateDto userCreateDto) {
        return null;
    }

    @Override
    protected UserResponseDto internalUpdate(UUID uuid, UserUpdateDto userUpdateDto) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
