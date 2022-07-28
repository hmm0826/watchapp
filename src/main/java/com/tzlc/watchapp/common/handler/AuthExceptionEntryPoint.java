package com.tzlc.watchapp.common.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.common.exceptions.InvalidTokenException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @description:
 * @author: Emoker
 **/
@Component
@Slf4j
public class AuthExceptionEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException  {
        Throwable cause = authException.getCause();
        // 如果错误类型是 InvalidTokenException 即无效token，
        // 页面跳转到 "/"
        if (cause instanceof InvalidTokenException) {
            response.sendRedirect("/");
        } else {
            authException.printStackTrace();
        }
    }
}

