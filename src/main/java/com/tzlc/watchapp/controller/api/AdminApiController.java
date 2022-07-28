package com.tzlc.watchapp.controller.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/admin")
@Slf4j
public class AdminApiController {

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseBody
    @RequestMapping("/success")
    public String success() {
        return "admin success";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/getPage")
    public String getPath(String path, HttpServletRequest request, Authentication auth) {
        log.info("...path is ..." + path);
        // 获取请求中的accessToken，方便后续页面进行请求
        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) auth.getDetails();
        request.setAttribute("accessToken", details.getTokenValue());
        return "admin/" + path;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping({"/",""})
    public String admin(HttpServletRequest request, Authentication auth, HttpServletResponse response)
            throws IOException {
        if (null == auth) {
            response.sendRedirect("/");
        }
        // 获取请求中的accessToken，方便后续页面进行请求
        OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) auth.getDetails();
        request.setAttribute("accessToken", details.getTokenValue());
        return "admin/index";
    }
}
