package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.SysShopUser;
import com.tzlc.watchapp.model.SysStationNotice;
import com.tzlc.watchapp.model.SysUser;
import org.springframework.security.core.Authentication;

import java.util.Map;

public interface SocketService {

    SysShopUser findShopIdByAuthentication(Authentication authentication, Integer userId);

    SysStationNotice saveNotice(String dataJsonString, Authentication auth);

    SysUser getUserByAuthentication(Authentication authentication, Integer userId);

}
