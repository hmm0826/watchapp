package com.tzlc.watchapp.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

/**
 * @program: watchapp
 * @description: 自我授权VO
 * @author: AndyZheng
 * @create: 2019-09-29 16:58
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocalAuthTokenVO extends SysUserVO implements Serializable {


    private static final long serialVersionUID = 1849175434971072170L;
    private String accessToken;

    private String tokenType;

    private String refreshToken;

    private Integer expiresIn;

    private String scope;

}
