package com.tzlc.watchapp.common.exception;

import com.tzlc.watchapp.common.result.ResultCode;

/**
 * @program: watchapp
 * @description: 未授权异常
 * @author: AndyZheng
 * @create: 2019-09-30 16:58
 **/
public class WxUnauthorizedException extends BaseException {

    private static final long serialVersionUID = 4997941156642436895L;

    public WxUnauthorizedException() {
        super(ResultCode.USER_WX_LOGIN_UNAUTHORIZED);
    }

}
