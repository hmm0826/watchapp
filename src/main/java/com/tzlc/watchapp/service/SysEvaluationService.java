package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.vo.SysEvaluationVO;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;

public interface SysEvaluationService {
    RestResult findList(Integer shopId, Integer filter, Pageable pageable);

    RestResult getEvaluationCount(Integer shopId);

    RestResult addEvaluation(Authentication authentication, Integer orderId, SysEvaluationVO sysEvaluationVO);
//    RestResult findList(Integer shopId, Integer filter, Pageable pageable);
//
//    RestResult getEvaluationCount(Integer shopId);
}
