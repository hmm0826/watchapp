package com.tzlc.watchapp.common.handler;

import lombok.extern.slf4j.Slf4j;
import com.tzlc.watchapp.common.exception.BaseException;
import com.tzlc.watchapp.common.result.RestResult;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.io.IOException;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 全局异常捕捉处理
     * @param ex
     * @return
     */
    @ResponseBody
    @ExceptionHandler(value = {BaseException.class, Exception.class})
    public RestResult errorHandler(Exception ex) throws IOException {
        log.error("Exception Message:", ex);
        if (ex instanceof AccessDeniedException) {
            log.info("...AccessDeniedException...");
            // 获取到spring全局的 response 对象，并通过sendRedirect() 方法跳转
            ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                    .getResponse().sendRedirect("/");
        } else if (ex instanceof BaseException) {
            return RestResult.failure(((BaseException) ex).getResultCode());
        }
        return RestResult.failure();
    }

}
