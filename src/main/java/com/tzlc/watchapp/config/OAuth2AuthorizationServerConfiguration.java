package com.tzlc.watchapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;

import javax.annotation.Resource;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/6 15:34
 */
@Configuration
@EnableAuthorizationServer
public class OAuth2AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

    @Resource(name = "clientDetailsServiceImpl")
    private ClientDetailsService clientDetailsService;

    @Resource(name = "userDetailsServiceImpl")
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Autowired
    private RedisConnectionFactory redisConnectionFactory;

    //@Bean
    public TokenStore tokenStore() {

        return new RedisTokenStore(redisConnectionFactory);
    }



    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.passwordEncoder(new BCryptPasswordEncoder()).allowFormAuthenticationForClients();
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
       clients.withClientDetails(clientDetailsService);
    }



    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
                .authenticationManager(authenticationManager)   // password模式需要authenticationManager
                .userDetailsService(userDetailsService)         // 必须指定，否则refresh_token会报错
                /**
                 * 存储token
                 * InMemoryTokenStore   		基于内存，默认值
                 * JdbcTokenStore            	基于数据库
                 * JwtTokenStore              	基于Jwt
                 * RedisTokenStore           	基于redis，可以利用redis自身key的过期时间
                 */
                .tokenStore(tokenStore());
    }
}
