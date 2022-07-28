package com.tzlc.watchapp.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/6 9:33
 */

@RestController
@RequestMapping("/api/user")
public class UserApiController {

    @RequestMapping("/success")
    public String loginSuccess() {
        return "login success";
    }
}
