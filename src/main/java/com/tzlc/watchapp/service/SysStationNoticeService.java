package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.result.RestResult;
import org.springframework.security.core.Authentication;

import java.util.Map;

public interface SysStationNoticeService {

    RestResult findStationNotice(boolean isRead, Integer shopId, Integer userId, Authentication authentication);

    RestResult updateNotice(Integer orderId, Authentication authentication);

}
