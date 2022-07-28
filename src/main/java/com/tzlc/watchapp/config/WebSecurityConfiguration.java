package com.tzlc.watchapp.config;

import com.tzlc.watchapp.service.Impl.UserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.Resource;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/6 9:26
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Resource(name="userDetailsServiceImpl")
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    /**
     * 配置身份验证规则，UserDetailsService是到数据库中查找匹配的用户及身份，PasswordEncoder为密码加密方式
     * @return
     */
    public AuthenticationProvider daoAuthenticationProvider() {
            DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
            provider.setUserDetailsService(userDetailsService);
            provider.setPasswordEncoder(new BCryptPasswordEncoder());
            provider.setHideUserNotFoundExceptions(false) ;
            return provider ;
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.formLogin()
//                .successForwardUrl("/api/user/success")
//                .and()
//                .authorizeRequests()
//                .antMatchers("/open/**", "/").permitAll()//不登录
//                .antMatchers("/api/**").authenticated()
//
//                .and()
//                .logout().logoutUrl("/logout")
//                .and()
//                .csrf().disable();                  // 开启跨域请求配置
//    }
}
