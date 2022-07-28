package com.tzlc.watchapp.common.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tzlc.watchapp.common.result.RestResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2RefreshToken;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/13 10:03
 */

@Component
public class MyLogoutSuccessHandler implements LogoutSuccessHandler {

    @Autowired
    private RedisConnectionFactory redisConnectionFactory;

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        //清除redis里access——token，refresh——token，accesstoken和refreshtoken的联合数据
        // 0. 定义返回类型和格式
        ObjectMapper objectMapper = new ObjectMapper();
        httpServletResponse.setCharacterEncoding("utf-8");
        httpServletResponse.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_UTF8_VALUE);

        // 1. 获取已登录用户access_token
        String accessToken = httpServletRequest.getParameter("access_token");

        // 2. 清除Redis中的授权信息
        if(!StringUtils.isEmpty(accessToken)){
            // 2.1 获取accessToken对象
            TokenStore tokenStore = new RedisTokenStore(redisConnectionFactory);
            OAuth2AccessToken oAuth2AccessToken = tokenStore.readAccessToken(accessToken);


                // 2.2 根据accessToken对象，获取refreshToken对象
                OAuth2RefreshToken oAuth2RefreshToken = oAuth2AccessToken.getRefreshToken();


                // 2.3 清除Redis中的，accessToken与refreshToken，以及它们之前的关联数据
                tokenStore.removeAccessToken(oAuth2AccessToken);
                tokenStore.removeRefreshToken(oAuth2RefreshToken);
                tokenStore.removeAccessTokenUsingRefreshToken(oAuth2RefreshToken);

        }

        // 3. 返回登出成功的信息
        objectMapper.writeValue(httpServletResponse.getWriter(), RestResult.success());
    }
}
