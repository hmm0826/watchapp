package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.vo.SysShopMasterVO;
import com.tzlc.watchapp.model.vo.SysShopVO;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;

import java.math.BigDecimal;
import java.util.List;

public interface SysShopService {
    RestResult<List<SysShopVO>> findList(String order, BigDecimal latitude, BigDecimal longitude, Pageable pageable);

    RestResult findShopInfoAndContactById(Integer shopId);

    RestResult listShopMaster(Authentication authentication);

    RestResult addShopMaster(SysShopMasterVO vo);

    RestResult delShopMaster(SysShopMasterVO vo);

    RestResult getShop(Authentication authentication);
}
