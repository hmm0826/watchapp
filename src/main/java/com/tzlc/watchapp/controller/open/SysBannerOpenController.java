package com.tzlc.watchapp.controller.open;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.vo.SysBannerVO;
import com.tzlc.watchapp.service.SysBannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("${open-prefix}/banner")
public class SysBannerOpenController {
    @Autowired
    private SysBannerService sysBannerService;
    @GetMapping("/list")
    public RestResult<List<SysBannerVO>> list(){
        return sysBannerService.list();
    }
}
