package com.tzlc.watchapp.dao.custom.impl;

import com.tzlc.watchapp.dao.custom.SysUserCustomDAO;
import com.tzlc.watchapp.model.dto.SysShopDTO;
import com.tzlc.watchapp.model.dto.SysUserRoleDTO;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class SysUserCustomDAOImpl implements SysUserCustomDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<SysUserRoleDTO> findUserRoleByUser(int userId) {
        StringBuffer sql = new StringBuffer();
        sql.append(" select sr.id as id, sr.name as name  ");
        sql.append(" from sys_role sr  ");
        sql.append(" right join sys_role_user sru on sru.role_id = sr.id  ");
        sql.append(" where sru.user_id = :userId  ");
        return entityManager.createNativeQuery(sql.toString(), SysUserRoleDTO.class)
                .setParameter("userId", userId)
                .getResultList();
    }

//    @Override
//    public SysShopDTO findShopInfoAndContactById(Integer shopId) {
//            StringBuffer sql = new StringBuffer();
//            sql.append("    select ss.id,ss.name,ss.location_text,ss.info, ss.favorable_rate,ss.shop_image,");
//            sql.append("        ss.latitude,ss.longitude,ss.create_by,ss.create_datetime,ss.last_update_by,");
//            sql.append("        ss.last_update_datetime,ss.del_status,");
//            sql.append("    0 as distance,su.id AS shop_manager_id,su.username AS shop_manager_name,su.phone AS shop_contact");
//            sql.append("    from sys_shop ss");
//            sql.append("    left join sys_shop_user ssu ON ssu.shop_id = ss.id");
//            sql.append("    left join sys_user su ON su,id = ssu.user_id");
//            sql.append("    left join sys_role_user sru ON su.id = sre.user_id");
//            sql.append("    AND sru.role_id = 4");
//            sql.append("    where ss.id = :shopId and IFNULL(ss.del_status,1) = 0");
//            sql.append("    AND (sru.role_id = 4 AND su.id is not null)");
//            Query query = entityManager.createNativeQuery(sql.toString());
//            return (SysShopDTO)query.getSingleResult();
//
//            //SysShopDTO 加一个属性 private String  shopContact;
//
//            //在public xxxx中查找 su.id AS shop_manager_id,su.username AS shop_manager_name 变成
//    }

}
