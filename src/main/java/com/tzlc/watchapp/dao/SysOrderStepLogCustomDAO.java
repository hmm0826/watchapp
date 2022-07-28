package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.model.dto.SysOrderStepLogDTO;

import java.util.List;

public interface SysOrderStepLogCustomDAO {
    List<SysOrderStepLogDTO> findStepAndDictByOrderId(Integer orderId);
}
