package com.tzlc.watchapp.service.Impl;

import com.tzlc.watchapp.common.exception.UnauthorizedException;
import com.tzlc.watchapp.common.exception.WxUnauthorizedException;
import com.tzlc.watchapp.model.dto.SysUserRoleDTO;
import com.tzlc.watchapp.model.vo.LocalAuthTokenVO;
import com.tzlc.watchapp.model.vo.SysUserRoleVO;
import com.tzlc.watchapp.model.vo.WechatAuthTokenVO;
import com.tzlc.watchapp.service.SysUserService;
import com.tzlc.watchapp.utils.LoginUtils;
import lombok.extern.slf4j.Slf4j;
import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.dao.SysUserDAO;
import com.tzlc.watchapp.model.SysUser;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Slf4j
@Service
@Transactional(rollbackOn = Exception.class)
public class SysUserServiceImpl implements SysUserService {

    @Autowired
    private SysUserDAO sysUserDAO;

    @Override
    public RestResult<List<SysUser>> listUser() {
        return RestResult.success(sysUserDAO.findAll());
    }

    @Override
    public RestResult<List<SysUserRoleVO>> findUserRoleByUser(int userId) {
        List<SysUserRoleDTO> roles = sysUserDAO.findUserRoleByUser(userId);
        List<SysUserRoleVO> resultList = new ArrayList<SysUserRoleVO>();
        for (SysUserRoleDTO dto : roles) {
            SysUserRoleVO vo = new SysUserRoleVO();
            BeanUtils.copyProperties(dto, vo);
            resultList.add(vo);
        }
        return RestResult.success(resultList);
    }

    @Override
    public RestResult wxLogin(String code, String clientId, String clientSecret) throws IOException, WxUnauthorizedException, UnauthorizedException {
        // 1.微信系统的授权 - 获取openId
        WechatAuthTokenVO wechatAuthTokenVO = LoginUtils.getWxSessionKeyAndOpenIdByCode(code);
        if (null == wechatAuthTokenVO) {
            throw new WxUnauthorizedException();
        }

        // 2.oauth2登陆授权
        LocalAuthTokenVO localAuthTokenVO = LoginUtils.loginMyselfByPassword(wechatAuthTokenVO.getOpenid(), ""
                , clientId, clientSecret);
        if (null == localAuthTokenVO) {
            throw new UnauthorizedException();
        }
        // 3.更新用户登录时间
        sysUserDAO.updateLastLoginDatetimeByUnionIdOrPhone(Calendar.getInstance().getTime(), wechatAuthTokenVO.getOpenid());

        // 4.整合用户信息
        SysUser sysUser = sysUserDAO.findByPhoneOrUnionId(wechatAuthTokenVO.getOpenid(), wechatAuthTokenVO.getOpenid());
        if (sysUser == null) {
            throw new UnauthorizedException();
        }
        // 5.整合用户信息
        localAuthTokenVO = insertSysUserToLocalAuthTokenVO(sysUser, localAuthTokenVO);

        // 6.返回accessToken
        return RestResult.success(localAuthTokenVO);
    }


    private LocalAuthTokenVO insertSysUserToLocalAuthTokenVO(SysUser user, LocalAuthTokenVO localAuthTokenVO) {

        if (null == localAuthTokenVO) {
            return localAuthTokenVO;
        }
        // 1.基本用户信息
        // 注意：不要把密码set进去
        localAuthTokenVO.setAvatarUrl(user.getAvatarUrl());
        localAuthTokenVO.setId(user.getId());
        localAuthTokenVO.setLastLoginDatetime(user.getLastLoginDatetime());
        localAuthTokenVO.setPhone(user.getPhone());
        localAuthTokenVO.setRegistrationDatetime(user.getRegistrationDatetime());
        localAuthTokenVO.setSex(user.getSex());
        localAuthTokenVO.setUsername(user.getUsername());

        // 2.用户角色
        List<SysUserRoleDTO> rolesDTO = sysUserDAO.findUserRoleByUser(user.getId());
        List<SysUserRoleVO> rolesVO = new ArrayList<SysUserRoleVO>();
        SysUserRoleVO vo = null;
        for (SysUserRoleDTO role : rolesDTO) {
            vo = new SysUserRoleVO();
            BeanUtils.copyProperties(role, vo);
            rolesVO.add(vo);
        }
        localAuthTokenVO.setRoles(rolesVO);
        // 3.返回localAuthTokenVO
        return localAuthTokenVO;
    }
}
