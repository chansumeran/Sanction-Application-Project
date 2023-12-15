package com.sanction.backend_sanction.dto;

import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentResponse {

    private String fullName;

    private String info;

    private String sanction;

}
