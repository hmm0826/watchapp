package com.tzlc.watchapp.service.Impl;

import com.alibaba.fastjson.JSONObject;
import com.tzlc.watchapp.dao.SysShopUserDAO;
import lombok.extern.slf4j.Slf4j;
//import com.tzlc.watchapp.dao.SysShopUserDAO;
import com.tzlc.watchapp.dao.SysStationNoticeDAO;
import com.tzlc.watchapp.dao.SysUserDAO;
import com.tzlc.watchapp.model.SysShopUser;
import com.tzlc.watchapp.model.SysStationNotice;
import com.tzlc.watchapp.model.SysUser;
import com.tzlc.watchapp.service.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Slf4j
@Service
@Transactional(rollbackOn = Exception.class)
public class SocketServiceImpl implements SocketService {

    @Autowired
    SysStationNoticeDAO sysStationNoticeDAO;
    @Autowired
    SysShopUserDAO sysShopUserDao;
    @Autowired
    SysUserDAO sysUserDAO;

    // 通过accessToken获取shopUser
    @Override
    public SysShopUser findShopIdByAuthentication(Authentication authentication, Integer userId) {
        if (null == authentication && null == userId) {
            return null;
        }
        SysUser sysUser = null;
        if (null != authentication) {
            String username = authentication.getName();
            sysUser = sysUserDAO.findByPhoneOrUnionId(username, username);
        }
        if (null != sysUser) {
            userId = sysUser.getId();
        }
        SysShopUser shopUser =sysShopUserDao.findSysShopUserByUserId(userId);
        if (null == shopUser) {
            return null;
        }
        return shopUser;
    }

    // 保存消息以便后续通知
    @Override
    public SysStationNotice saveNotice(String dataJsonString, Authentication auth) {
        if (null == dataJsonString) {
            return null;
        }
        SysStationNotice sysStationNotice = JSONObject.parseObject(dataJsonString, SysStationNotice.class);
        log.info("...saveNotice...SysStationNotice: " + sysStationNotice);
        sysStationNotice.setCreatedBy(0);
        // save
        sysStationNotice.setMessage("你有一个订单发生改变，请前往查看");
        sysStationNoticeDAO.save(sysStationNotice);
        return sysStationNotice;
    }

    @Override
    public SysUser getUserByAuthentication(Authentication authentication, Integer userId) {
        if (null == authentication && null == userId) {
            return null;
        }
        SysUser user = null;
        if (null != authentication) {
            String username = authentication.getName();
            user = sysUserDAO.findByPhoneOrUnionId(username, username);
        } else {
            Optional<SysUser> userOptional = sysUserDAO.findById(userId);
            user = userOptional.get();
        }
        return user;
    }
}
