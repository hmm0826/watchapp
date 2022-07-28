package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.dao.custom.SysEvaluationCustomDAO;
import com.tzlc.watchapp.model.SysEvaluation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface SysEvaluationDAO extends JpaRepository<SysEvaluation,Integer>, SysEvaluationCustomDAO {
    @Query(value = "select sum(not ISNULL(sea.id)) as `0`,sum(sea.star >=3) as `1`,sum(sea.star <3) as `2`"+
        ",sum(ISNULL(sea.repair_item_photo)) as `4`,sum(not ISNULL(sea.repair_item_photo)) as `3`" +
            "from  sys_evaluation sea where sea.shop_id = :shopId",nativeQuery = true)
    Map getEvaluationCount(@Param("shopId") Integer shopId);

}
