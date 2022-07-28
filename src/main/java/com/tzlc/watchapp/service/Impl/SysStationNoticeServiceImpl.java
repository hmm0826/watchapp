package com.tzlc.watchapp.service.Impl;

import lombok.extern.slf4j.Slf4j;
import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.dao.SysShopUserDAO;
import com.tzlc.watchapp.dao.SysStationNoticeDAO;
import com.tzlc.watchapp.dao.SysUserDAO;
import com.tzlc.watchapp.model.SysDict;
import com.tzlc.watchapp.model.SysShopUser;
import com.tzlc.watchapp.model.SysStationNotice;
import com.tzlc.watchapp.model.SysUser;
import com.tzlc.watchapp.model.bean.DictNode;
import com.tzlc.watchapp.model.vo.SysStationNoticeVO;
import com.tzlc.watchapp.service.SysDictService;
import com.tzlc.watchapp.service.SysStationNoticeService;
import com.tzlc.watchapp.utils.RoleUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional(rollbackOn = Exception.class)
public class SysStationNoticeServiceImpl implements SysStationNoticeService {

    @Autowired
    SysStationNoticeDAO sysStationNoticeDAO;
    @Autowired
    SysUserDAO sysUserDAO;
    @Autowired
    SysShopUserDAO sysShopUserDAO;


    @Override
    public RestResult findStationNotice(boolean isRead, Integer noticeShopId, Integer noticeCustomerId, Authentication auth) {
        if (null == auth) {
            return RestResult.failure();
        }
        // 获取用户信息
        String username = auth.getName();
        SysUser sysUser = sysUserDAO.findByPhoneOrUnionId(username, username);
        if (null == sysUser) {
            return RestResult.failure();
        }
        // 判断是否关联店铺
        SysShopUser shopUser = sysShopUserDAO.findSysShopUserByUserId(sysUser.getId());
        // 判断用户角色
        if ((RoleUtils.isMaster(auth) || RoleUtils.isStoremanager(auth)) && null != shopUser) {
            noticeCustomerId = null;
            noticeShopId = shopUser.getShopId();
        } else if (RoleUtils.isCustomer(auth)) {
            noticeShopId = null;
            noticeCustomerId= sysUser.getId();
        }
        List<SysStationNotice> sysStationNoticeList = new ArrayList<>();
        List<SysStationNoticeVO> noticeResultList = new ArrayList<>();
        // 获取通知列表，如果noticeShopId为null，
        // 说明当前用户是消费者，调用消费者获取消息的接口
        if (null == noticeShopId) {
            sysStationNoticeList = sysStationNoticeDAO.findByIsReadAndNotifyCustomerId(false, noticeCustomerId);
        } else if (null == noticeCustomerId) {
            sysStationNoticeList = sysStationNoticeDAO.findByIsReadAndNotifyShopId(false,noticeShopId);
        }
        // 数据格式转化
        for (SysStationNotice sysStationNotice : sysStationNoticeList) {
            SysStationNoticeVO sysStationNoticeVO = new SysStationNoticeVO();
            BeanUtils.copyProperties(sysStationNotice, sysStationNoticeVO);
            noticeResultList.add(sysStationNoticeVO);
        }
        return RestResult.success(noticeResultList);
    }

    @Override
    public RestResult updateNotice(Integer orderId, Authentication auth) {
        if (null == auth) {
            return RestResult.failure();
        }
        // 获取用户信息
        String username = auth.getName();
        SysUser sysUser = sysUserDAO.findByPhoneOrUnionId(username, username);
        if (null == sysUser) {
            return RestResult.failure();
        }
        // 判断是否关联店铺
        SysShopUser shopUser = sysShopUserDAO.findSysShopUserByUserId(sysUser.getId());
        // 判断用户角色
        if ((RoleUtils.isMaster(auth) || RoleUtils.isStoremanager(auth)) && null != shopUser) {
            sysStationNoticeDAO.updateByOrderId(true,orderId,shopUser.getShopId(),sysUser.getId(), Calendar.getInstance().getTime());
        } else if (RoleUtils.isCustomer(auth)) {
            sysStationNoticeDAO.updateByCustomerId(true,orderId,sysUser.getId(),sysUser.getId(),Calendar.getInstance().getTime());
        }
        return RestResult.success();
    }
}
