package com.tzlc.watchapp.dao.custom.impl;

import com.tzlc.watchapp.common.constant.Constants;
import com.tzlc.watchapp.dao.SysOrderStepLogCustomDAO;
import com.tzlc.watchapp.model.dto.SysOrderStepLogDTO;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

public class SysOrderStepLogCustomDAOImpl implements SysOrderStepLogCustomDAO, Constants {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<SysOrderStepLogDTO> findStepAndDictByOrderId(Integer orderId){
        StringBuilder sql = new StringBuilder();
        sql.append(" select sosl.order_id,sosl.user_id.sosl.order_step, ");
        sql.append(" sosl.create_datetime,sd.dict_value as order_step_text");
        sql.append(" from sys_order_step_log sosl ");
        sql.append(" LEFT JOIN sys_dict sd ON sd.dict_parent  = 'order_status' ");
        sql.append(" AND sd.dict_key = sosl.order_step ");
        sql.append(" WHERE sosl.order_id = :orderId ");
        sql.append(" ORDER BY sosl.order_step desc");
        Query query = entityManager.createNativeQuery(sql.toString(), SysOrderStepLogDTO.class)
                .setParameter("orderId",orderId);
        return query.getResultList();
    }
}
