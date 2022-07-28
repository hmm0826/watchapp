package com.tzlc.watchapp.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/10 17:14
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginVO {

    private  String code;

    private String clientId;

    private String clientSecret;
}
