package com.tzlc.watchapp.service.Impl;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.common.result.ResultCode;
import com.tzlc.watchapp.dao.*;
import com.tzlc.watchapp.dao.custom.SysShopCustomDAO;
import com.tzlc.watchapp.model.SysEvaluation;
import com.tzlc.watchapp.model.SysOrder;
import com.tzlc.watchapp.model.SysOrderStepLog;
import com.tzlc.watchapp.model.SysUser;
import com.tzlc.watchapp.model.dto.SysEvaluationDTO;
import com.tzlc.watchapp.model.dto.SysOrderDTO;
import com.tzlc.watchapp.model.vo.SysEvaluationVO;
import com.tzlc.watchapp.service.SysEvaluationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
@Transactional(rollbackOn = Exception.class)
public class SysEvaluationServiceImpl implements SysEvaluationService {
    @Autowired
    private SysEvaluationDAO sysEvaluationDAO;

    @Autowired
    SysUserDAO sysUserDAO;

    @Autowired
    SysOrderDAO sysOrderDAO;

    @Autowired
    private SysOrderStepLogDAO sysOrderStepLogDAO;

    @Override
    public RestResult findList(Integer shopId, Integer filter, Pageable pageable) {
        List<SysEvaluationDTO> evaluations = sysEvaluationDAO.findList(shopId, filter, pageable);
        List<SysEvaluationVO> resultList = new ArrayList<>();
        if(evaluations == null || evaluations.isEmpty()){
            RestResult result = RestResult.success(resultList, 0);
            result.setPage(0,pageable);
        }
        evaluations.stream().forEach(item->{
            SysEvaluationVO vo = new SysEvaluationVO();
            BeanUtils.copyProperties(item,vo);
            resultList.add(vo);

        });
        int count = (int)sysEvaluationDAO.countList(shopId,filter);
        System.out.println("pageable->"+count);
        RestResult result = RestResult.success(resultList, count);
        result.setPage(count,pageable);

        return result;
    }

    @Override
    public RestResult getEvaluationCount(Integer shopId) {
        return RestResult.success(sysEvaluationDAO.getEvaluationCount(shopId));
    }

    @Override
    public RestResult addEvaluation(Authentication authentication,Integer orderId,SysEvaluationVO sysEvaluationVO){
        String username = authentication.getName();
        final int ORDER_STATUS_RATED = 12;
        //1.判断用户是否登录有效
        SysUser sysUser = sysUserDAO.findByPhoneOrUnionId(username,username);
        if(null == sysUser){
            return RestResult.failure();
        }
        //2.判断订单是否有效
        SysOrder order = sysOrderDAO.getOne(orderId);
        if(order == null){
            return RestResult.failure(ResultCode.ORDER_NOT_FOUND);
        }
        //3.保留评价记录信息
        Calendar calender = Calendar.getInstance();
        SysEvaluation sysEvaluation = new SysEvaluation();
        BeanUtils.copyProperties(sysEvaluationVO,sysEvaluation);
        sysEvaluation.setCreateBy(sysUser.getId());
        sysEvaluation.setCreateDatetime(calender.getTime());
        sysEvaluationDAO.saveAndFlush(sysEvaluation);
        //4.更新订单状态
        order.setOrderStep(ORDER_STATUS_RATED);
        sysOrderDAO.saveAndFlush(order);

        //5.日志记录
        sysOrderStepLogDAO.save(new SysOrderStepLog(orderId,sysUser.getId(),ORDER_STATUS_RATED,new Date()));
        return RestResult.success();
    }
}
