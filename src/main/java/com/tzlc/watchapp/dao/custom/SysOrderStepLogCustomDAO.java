package com.tzlc.watchapp.dao.custom;

import com.tzlc.watchapp.model.SysOrderStepLog;
import com.tzlc.watchapp.model.dto.OrderListInfoDTO;
import com.tzlc.watchapp.model.dto.SysOrderStepLogDTO;
import org.springframework.data.domain.Pageable;

import java.util.Date;
import java.util.List;

public interface SysOrderStepLogCustomDAO {

    List<SysOrderStepLogDTO> findStepAndDictByOrderId(Integer orderId);
}
