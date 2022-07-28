package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.exception.UnauthorizedException;
import com.tzlc.watchapp.common.exception.WxUnauthorizedException;
import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.SysUser;
import com.tzlc.watchapp.model.vo.SysUserRoleVO;
//import com.tzlc.watchapp.model.VO.SysUserRoleVO;

import java.io.IOException;
import java.util.List;

public interface SysUserService {

    RestResult<List<SysUser>> listUser();

    RestResult<List<SysUserRoleVO>> findUserRoleByUser(int userId);

    RestResult wxLogin(String code, String clientId, String clientSecret) throws IOException, WxUnauthorizedException, UnauthorizedException;

}
