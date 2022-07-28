package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.dao.custom.SysShopCustomDAO;
import com.tzlc.watchapp.model.SysShopUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface SysShopUserDAO extends JpaRepository<SysShopUser,Integer>, SysShopCustomDAO {
    SysShopUser findSysShopUserByUserId(Integer id);

    @Query(value = " select ssu " +
            " from SysShopUser ssu " +
            " left join SysUser su on su.id = ssu.userId " +
            " left join SysOrder so on so.shopId = ssu.shopId " +
            " where su.id = :userId and so.id = :orderId")
    SysShopUser findSysShopUserByUserIdAndOrderId(@Param("userId") Integer userId, @Param("orderId") Integer orderId);

    SysShopUser findByUserId(Integer userId);

    void deleteAllByShopId(Integer shopId);

    // JPQL方式 - 使用-In方法后缀

    @Modifying
    @Query(value = "delete from sys_shop_user where shop_id in :shopIds ", nativeQuery = true)
    void deleteAllByShopIdIn(Collection<Integer> shopIds);

    // JPA表达式版 - 使用in条件加集合
    //    void deleteAllByShopIdIn(Collection<Integer> shopIds);

    void deleteAllByUserId(Integer userId);
}
