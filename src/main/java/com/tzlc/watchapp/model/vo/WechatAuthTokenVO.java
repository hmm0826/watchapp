package com.tzlc.watchapp.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

/**
 * @program: watchapp
 * @description: 微信授权VO
 * @author: AndyZheng
 * @create: 2019-09-29 17:00
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WechatAuthTokenVO implements Serializable {


    private static final long serialVersionUID = 3690536489245487586L;
    private String openid;

    private String sessionKey;

    private Integer expiresIn;

}
