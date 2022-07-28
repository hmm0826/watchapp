package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.dao.custom.SysShopCustomDAO;
import com.tzlc.watchapp.model.SysRoleUser;
import com.tzlc.watchapp.model.SysShopUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @program: watchapp
 * @description:
 * @author: AndyZheng
 * @create: 2019-09-26 11:47
 **/
@Repository
public interface SysRoleUserDAO extends JpaRepository<SysRoleUser,Integer> {
    @Modifying
    @Query(value = " delete from sys_role_user where user_id = :userId ", nativeQuery = true)
    void deleteByUserId(@Param("userId") Integer userId);

    @Modifying
    @Query(value = " delete from sys_role_user where user_id in :userId ", nativeQuery = true)
    void deleteByUserId(@Param("userId") Integer[] userId);

}
