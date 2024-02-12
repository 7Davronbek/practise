package org.example.project.common.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonResponse {
    private String message;
    @JsonFormat(pattern = ResponseConstants.RESPONSE_DATE_FORMAT)
    private LocalDateTime dateTime;
    private int statusCode;
}
