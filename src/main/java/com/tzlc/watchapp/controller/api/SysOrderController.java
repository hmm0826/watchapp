package com.tzlc.watchapp.controller.api;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.bean.MasterRepairOrderInfo;
import com.tzlc.watchapp.model.vo.SysEvaluationVO;
import com.tzlc.watchapp.model.vo.SysOrderArchiveVO;
import com.tzlc.watchapp.model.vo.SysOrderVO;
import com.tzlc.watchapp.service.SysEvaluationService;
import com.tzlc.watchapp.service.SysOrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tzlc.watchapp.common.constant.Constants.ORDER_STATUS_8;


@Slf4j
@RestController
@RequestMapping(value = "${api-prefix}/order")
public class SysOrderController {

    @Autowired
    private SysOrderService sysOrderService;

    @Autowired
    private SysEvaluationService sysEvaluationService;

    @GetMapping(value="/searchOrder")
    public RestResult searchOrderList(String searchValue, Long orderLastTime, Pageable pageable, Authentication authentication){
        System.out.println("search:"+ sysOrderService.searchOrderList(authentication,orderLastTime,searchValue,pageable));
        return sysOrderService.searchOrderList(authentication,orderLastTime,searchValue,pageable);
    }

    // 根据code获取订单详情
    @GetMapping(value = "/code/{orderCode}")
    public RestResult queryOrderDetailByCode(Authentication authentication, @PathVariable String orderCode)  {
//        return RestResult.success("queryOrderDetailByCode: "+orderCode);
        System.out.println("扫码"+sysOrderService.findOrderDetailByCode(authentication,orderCode));
        return sysOrderService.findOrderDetailByCode(authentication,orderCode);
    }

    @GetMapping(value="/orders")
    public RestResult<List> queryOrderList(Authentication authentication, Integer orderListType, Long orderLastTime, Pageable pageable){
        return sysOrderService.listOrder(authentication,orderListType,orderLastTime,pageable);
    }

    @GetMapping(value="/{orderId}")
    public RestResult queryOrderDetail(Authentication authentication, @PathVariable Integer orderId){
        System.out.println("/{orderId}"+sysOrderService.findOrderDetail(orderId,authentication));

        return sysOrderService.findOrderDetail(orderId,authentication);
    }

    @GetMapping(value="/{orderId}/steps")
    public RestResult queryOrderSteps(Authentication authentication, @PathVariable Integer orderId){
        System.out.println("steps:"+sysOrderService.findOrderSteps(orderId,authentication));
        return sysOrderService.findOrderSteps(orderId,authentication);
    }

    // 接受预约
    // 创建预约
    @PostMapping(value = "/appointment/create")
    public RestResult createOrder(Authentication authentication, SysOrderVO orderVO)  {
        return sysOrderService.saveAppointment(orderVO,authentication);
    }

    // 接受预约
//    @PostMapping(value = "/{orderId}/appointment/accept")
    @PostMapping(value = "/{orderId}/appointment/accept")
    public RestResult acceptAppointment(Authentication auth, @PathVariable Integer orderId)  {
//        return RestResult.success();
        System.out.println("接受预约:"+sysOrderService.updateOrder(auth, orderId, 2));
        return sysOrderService.updateOrder(auth, orderId, 2);
    }

    // 取消预约
    @PostMapping(value = "/{orderId}/appointment/cancel")
    public RestResult cancelAppointment(Authentication auth, @PathVariable Integer orderId)  {
        return sysOrderService.updateOrder(auth, orderId, 10);
    }

    // 拒绝预约
    @PostMapping(value = "/{orderId}/appointment/refuse")
    public RestResult refuseAppointment(Authentication auth, @PathVariable Integer orderId)  {
        return sysOrderService.updateOrder(auth, orderId, 9);
    }

    // 师傅接受维修
    @PostMapping(value = "/{orderId}/repair/accept")
    public RestResult acceptRepair(Authentication auth, @PathVariable Integer orderId, MasterRepairOrderInfo orderInfo)  {
        return sysOrderService.acceptRepair(auth,orderInfo);
    }
    // 用户确认报价
    @PostMapping(value = "/{orderId}/repair/confirm")
    public RestResult confirmRepair(Authentication authentication, @PathVariable Integer orderId,
                                    String customerSignature, boolean isAgreeRepair)  {
        return sysOrderService.confirmRepair(authentication, orderId, customerSignature, isAgreeRepair);
    }

    //店铺 //用户取消维修
        @PostMapping(value="/{orderId}/repair/cancel")
        public RestResult cancelRepair(Authentication authentication,@PathVariable Integer orderId){
            return sysOrderService.updateOrder(authentication,orderId,11);
       }//双重确认
    @PostMapping(value="/{orderId}/repair/doubleConfirm")
    public RestResult doubleConfirm(Authentication authentication, @PathVariable Integer orderId){
        return sysOrderService.updateOrder(authentication,orderId,6);
    }
    //确认维修完成
    @PostMapping(value = "/{orderId}/repair/complete")
    public RestResult completeRepair(Authentication auth, @PathVariable Integer orderId, SysOrderArchiveVO sysOrderArchiveVO){
        return sysOrderService.completeRepair(auth,orderId,sysOrderArchiveVO);
    }
    //取表
    @PostMapping(value = "/{orderId}/takeWatch")
    public RestResult takeWatch(Authentication auth,@PathVariable Integer orderId,SysOrderArchiveVO sysOrderArchiveVO){
        return sysOrderService.updateOrder(auth,orderId,ORDER_STATUS_8);
    }
    //用户评价提交
    @PostMapping(value = "/{orderId}/evaluation")
    public RestResult evaluation(Authentication authentication, @PathVariable Integer orderId, SysEvaluationVO sysEvaluationVO){
        return sysEvaluationService.addEvaluation(authentication,orderId,sysEvaluationVO);
    }

}

