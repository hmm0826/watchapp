package com.tzlc.watchapp.controller.api;

import lombok.extern.slf4j.Slf4j;
import com.tzlc.watchapp.common.constant.Constants;
import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.bean.MasterRepairOrderInfo;
import com.tzlc.watchapp.model.vo.SysOrderArchiveVO;
import com.tzlc.watchapp.model.vo.SysOrderVO;
import com.tzlc.watchapp.service.SysOrderService;
import com.tzlc.watchapp.service.SysStationNoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "${api-prefix}/notice")
public class SysStationNoticeController implements Constants {

    @Autowired
    SysStationNoticeService sysStationNoticeService;
    // 搜索订单
    @GetMapping(value = "/query")
    public RestResult query(Integer shopId,Integer userId, Authentication authentication) {
        return sysStationNoticeService.findStationNotice(false,shopId,userId,authentication);
    }

    @PostMapping(value = "/update")
    public RestResult updateNotices(Integer orderId,Authentication authentication){
        if(orderId == null){
            return RestResult.failure();
        }
        return sysStationNoticeService.updateNotice(orderId,authentication);

    }
}
