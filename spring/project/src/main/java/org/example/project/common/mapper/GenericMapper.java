package org.example.project.common.mapper;


public abstract class GenericMapper<ENTITY, CREATE_DTO, RESPONSE_DTO,UPDATE_DTO> {
    public abstract ENTITY toEntity(CREATE_DTO createDto);
    public abstract RESPONSE_DTO toResponseDto(ENTITY entity);
    public abstract void toEntity(UPDATE_DTO updateDto, ENTITY entity);
}
