package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.model.vo.SysBannerVO;

import java.util.List;

public interface SysBannerService {
    RestResult<List<SysBannerVO>> list();
}
