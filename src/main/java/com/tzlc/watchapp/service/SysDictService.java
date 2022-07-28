package com.tzlc.watchapp.service;



import com.tzlc.watchapp.common.result.RestResult;

import java.util.List;
import java.util.Map;

public interface SysDictService {
    RestResult<Map> findSelector();
}
