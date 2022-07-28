package com.tzlc.watchapp.config;

import com.tzlc.watchapp.common.handler.AuthExceptionEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/6 16:54
 */

@Configuration
@EnableResourceServer
public class Oauth2ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    @Autowired
    private LogoutSuccessHandler logoutSuccessHandler;

    @Autowired
    private AuthExceptionEntryPoint authExceptionEntryPoint;

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.resourceId("watch").stateless(true)
        .authenticationEntryPoint(authExceptionEntryPoint);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.formLogin()
                .successForwardUrl("/api/user/success")
                .and()
                .authorizeRequests()
                .antMatchers("/open/**", "/","/oauth/*").permitAll()//不登录
                .antMatchers("/api/**").authenticated()

                .and()
                .logout().logoutUrl("/logout")
                .logoutSuccessHandler(logoutSuccessHandler)
                //允许iframe同源请求设置
                .and().headers().frameOptions().sameOrigin() ;                // 开启跨域请求配置
    }
}
