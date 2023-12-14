package com.sanction.backend_sanction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @Column(name = "userid")
    private Integer user_id;

    @Column(name = "userName")
    private String username;

    @Column(name = "userPass")
    private String password;

    @Column(name = "userRole")
    private String userRole;
}
