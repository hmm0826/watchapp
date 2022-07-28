package com.tzlc.watchapp.common.exception;

import com.tzlc.watchapp.common.result.ResultCode;

/**
 * @program: watchapp
 * @description: 未授权异常
 * @author: AndyZheng
 * @create: 2019-09-30 16:58
 **/
public class UnauthorizedException extends BaseException {


    private static final long serialVersionUID = 7772379474320730140L;

    public UnauthorizedException() {
        super(ResultCode.USER_LOGIN_UNAUTHORIZED);
    }

}
