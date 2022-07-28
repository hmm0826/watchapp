package com.tzlc.watchapp.controller.open;

import com.tzlc.watchapp.common.exception.UnauthorizedException;
import com.tzlc.watchapp.common.exception.WxUnauthorizedException;
import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.SysUser;
import com.tzlc.watchapp.model.vo.LoginVO;
import com.tzlc.watchapp.service.SysUserService;
import com.tzlc.watchapp.utils.LoginUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/5 10:17
 */

    @RestController
    @RequestMapping("${open-prefix}/user")
    public class SysUserOpenController {

        @Autowired
        private SysUserService sysUserService;

        @RequestMapping("/list")
        public RestResult<List<SysUser>> list() {
            return sysUserService.listUser();
        }

        @RequestMapping("/roles/{userId}")
        public RestResult findUserRoleByUser(@PathVariable Integer userId) {
            return sysUserService.findUserRoleByUser(userId);
        }

//    @ResponseBody
//    @PostMapping(value = "/wx/login")
//    public RestResult wxLogin (@RequestBody LoginVO loginVO) throws IOException, UnauthorizedException, WxUnauthorizedException {
//        return sysUserService.wxLogin(loginVO.getCode(),loginVO.getClientId(),loginVO.getClientSecret());
//    }

    //@ResponseBody
    @PostMapping("/wx/login")
    public RestResult wxLogin (String code, String  clientId, String clientSecret) throws IOException, UnauthorizedException, WxUnauthorizedException {
        return sysUserService.wxLogin(code, clientId, clientSecret);
    }


}
