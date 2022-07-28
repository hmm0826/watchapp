package com.tzlc.watchapp.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SysUserVO implements Serializable {

    private static final long serialVersionUID = -1764639835601863587L;

    private Integer id;

    private String username;

    private Date birthday;

    private short sex;

    private String password;

    private String phone;

    private Boolean status;

    private String unionId;

    private String city;

    private String avatarUrl;

    private Date lastLoginDatetime;

    private Date registrationDatetime;

    private List<SysUserRoleVO> roles;

}
