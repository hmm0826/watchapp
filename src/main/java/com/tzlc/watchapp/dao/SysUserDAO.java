package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.dao.custom.SysUserCustomDAO;
import com.tzlc.watchapp.model.SysUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/4 18:01
 */
public interface SysUserDAO extends JpaRepository <SysUser,Integer>, SysUserCustomDAO {

    SysUser findByPhoneOrUnionId(String phone, String unionId);

    @Modifying
    @Query("update SysUser su set su.lastLoginDatetime = :lastLoginDatetime where su.unionId = :username or su.phone = :username")
    void updateLastLoginDatetimeByUnionIdOrPhone(@Param("lastLoginDatetime")Date lastLoginDatetime, @Param("username") String username);


}
