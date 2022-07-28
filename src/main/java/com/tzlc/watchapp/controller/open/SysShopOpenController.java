package com.tzlc.watchapp.controller.open;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.service.SysBannerService;
import com.tzlc.watchapp.service.SysEvaluationService;
import com.tzlc.watchapp.service.SysShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
@RequestMapping("${open-prefix}/shop")
public class SysShopOpenController {

    @Autowired
    private SysShopService sysShopService;
    @Autowired
    private SysEvaluationService sysEvaluationService;


    /**
     * ?order=distance&latitude=&longitude=&page=0&size=5
     * @param order
     * @param latitude
     * @param longitude
     * @param pageable
     * @return
     */
    @GetMapping("/list")
    public RestResult list(String order, BigDecimal latitude, BigDecimal longitude, Pageable pageable){
        return sysShopService.findList(order,latitude,longitude,pageable);
    }



    @GetMapping("/{shopId}")
    public RestResult getOne(@PathVariable Integer shopId){
        return sysShopService.findShopInfoAndContactById(shopId);
    }

    @GetMapping("/{shopId}/evaluations")
    public RestResult getEvaluations(@PathVariable Integer shopId,Integer filter,Pageable pageable){
        return sysEvaluationService.findList(shopId,filter,pageable);
    }

    @GetMapping("/{shopId}/evaluations/count")
    public RestResult getEvaluationCount(@PathVariable Integer shopId){
        return sysEvaluationService.getEvaluationCount(shopId);
    }
}