package com.tzlc.watchapp.service.Impl;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.dao.SysBannerDao;
import com.tzlc.watchapp.model.SysBanner;
import com.tzlc.watchapp.model.vo.SysBannerVO;
import com.tzlc.watchapp.service.SysBannerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional(rollbackOn = Exception.class)
public class SysBannerServiceImpl implements SysBannerService {
    @Autowired
    private SysBannerDao sysBannerDao;


    @Override
    public RestResult<List<SysBannerVO>> list() {
        List<SysBanner> entities = sysBannerDao.findByOrderBySeq();
        if(entities !=null && !entities.isEmpty()){
            List<SysBannerVO> resultList = new ArrayList<>();
            SysBannerVO vo = null;
            for (SysBanner entity : entities) {
                vo = new SysBannerVO();
                BeanUtils.copyProperties(entity,vo);
                resultList.add(vo);
            }
            return RestResult.success(resultList);
        }
        return RestResult.failure();
    }
}
