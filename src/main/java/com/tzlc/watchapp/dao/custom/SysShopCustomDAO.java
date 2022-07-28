package com.tzlc.watchapp.dao.custom;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.dto.SysEvaluationDTO;
import com.tzlc.watchapp.model.dto.SysShopDTO;
import com.tzlc.watchapp.model.dto.SysShopMasterDTO;
import com.tzlc.watchapp.model.vo.SysEvaluationVO;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.util.List;

public interface SysShopCustomDAO {
    List<SysShopDTO> findListOrder(String order, BigDecimal latitude, BigDecimal longitude, Pageable pageable);

    long countListOrder();

    SysShopDTO findShopInfoAndContactById(Integer shopId);

    List<SysShopMasterDTO> listShopMaster(Integer userId);

}
