package com.tzlc.watchapp.dao.custom.impl;

import com.tzlc.watchapp.dao.custom.SysEvaluationCustomDAO;
import com.tzlc.watchapp.model.dto.SysEvaluationDTO;
import com.tzlc.watchapp.model.dto.SysShopDTO;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.math.BigInteger;
import java.util.List;

public class SysEvaluationCustomDAOImpl implements SysEvaluationCustomDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<SysEvaluationDTO> findList(Integer shopId, Integer filter, Pageable pageable){
        StringBuffer sql = new StringBuffer();
        sql.append("    select sea.*,su.avatar_url,su.username,su.id");
        sql.append("     from sys_evaluation sea");
        sql.append("     LEFT JOIN sys_order so ON so.id=sea.order_id");
        sql.append("     LEFT JOIN sys_user su ON su.id=so.customer_id");
        sql.append("     where sea.shop_id = :shopId ");
        switch (filter){
            case 1:
                sql.append(" and sea.star>=3 ");
                break;
            case 2:
                sql.append(" and sea.star<3 ");
                break;
            case 3:
                sql.append(" and isnull(sea.repair_item_photo) <=0 ");
                break;
            case 4:
                sql.append(" and isnull(sea.repair_item_photo) > 0 ");
                break;
        }
        sql.append("ORDER BY sea.create_datetime desc");


        Query query = entityManager.createNativeQuery(sql.toString(), SysEvaluationDTO.class)
                .setParameter("shopId",shopId)
                .setFirstResult((int)pageable.getOffset())//offset  = currentPage*pageSize
                .setMaxResults(pageable.getPageSize());
        return query.getResultList();
    }
    @Override
    public long countList(Integer shopId, Integer filter){
        System.out.println("shopId->"+shopId);
        System.out.println("filter->"+filter);
        StringBuffer sql = new StringBuffer();
        sql.append("    select count(*)");
        sql.append("     from sys_evaluation sea ");
        sql.append("     where sea.shop_id = :shopId ");
        switch (filter){
            case 1:
                sql.append(" and sea.star>=3");
                break;
            case 2:
                sql.append(" and sea.star<3");
                break;
            case 3:
                sql.append(" and isnull(sea.repair_item_photo) <=0 ");
                break;
            case 4:
                sql.append(" and isnull(sea.repair_item_photo) > 0");
                break;
        }
        Query query = entityManager.createNativeQuery(sql.toString())
                .setParameter("shopId",shopId);
        return ((BigInteger)query.getSingleResult()).longValue();
    }
}
