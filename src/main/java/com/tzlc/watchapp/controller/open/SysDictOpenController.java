package com.tzlc.watchapp.controller.open;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.service.SysDictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("${open-prefix}/dict")
public class SysDictOpenController {
    @Autowired
    SysDictService sysDictService;
    @GetMapping("/selector")
    public RestResult<Map> list(){
        return sysDictService.findSelector();
    }
}
