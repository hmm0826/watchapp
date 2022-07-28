package com.tzlc.watchapp.dao.custom;

import com.tzlc.watchapp.model.dto.SysEvaluationDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SysEvaluationCustomDAO {
    List<SysEvaluationDTO> findList(Integer shopId, Integer filter, Pageable pageable);

    long countList(Integer shopId, Integer filter);

}
