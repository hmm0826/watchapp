package com.tzlc.watchapp.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.security.oauth2.provider.client.JdbcClientDetailsService;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import javax.transaction.Transactional;

@Service
@Transactional(rollbackOn = Exception.class)
public class ClientDetailsServiceImpl implements ClientDetailsService {

    @Autowired
    private DataSource dataSource;

    /**
     * 根据clientId找到对应用的开放客户端，保存于ClientDetails中，用于与请求用户携带的header中的clientId对比
     * @param clientId
     * @return
     * @throws ClientRegistrationException
     */
    @Override
    public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
        JdbcClientDetailsService jdbcClientDetailsService = new JdbcClientDetailsService(dataSource);
        ClientDetails clientDetails = jdbcClientDetailsService.loadClientByClientId(clientId);
        return clientDetails;
    }
}
