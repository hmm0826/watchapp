package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.model.SysOrderQrCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SysOrderQrCodeDAO extends JpaRepository<SysOrderQrCode, Integer> {

    SysOrderQrCode findByOrderIdAndSceneAndState(Integer orderId,Integer scene, Boolean state);

    SysOrderQrCode findByCodeAndState(String code, Boolean state);

    @Modifying
    @Query(value = "update sys_order_qrcode soq SET state = :state WHERE  soq.`code` = :code", nativeQuery = true)
    void updateStateByCode(Boolean state, String code);

    @Modifying
    @Query(value = "update sys_order_qrcode soq SET state = :state WHERE  soq.order_id = :orderId and soq.scene=:scene ", nativeQuery = true)
    void updateStateByOrderIdAndScene(@Param("state") Boolean state, @Param("orderId")Integer orderId, @Param("scene")Integer scene);
}
