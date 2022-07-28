package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.model.SysOrderStepLog;

import com.tzlc.watchapp.model.key.SysOrderStepLogKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysOrderStepLogDAO extends JpaRepository<SysOrderStepLog, SysOrderStepLogKey>, SysOrderStepLogCustomDAO {
    List<SysOrderStepLog> findByOrderIdOrderByOrderStepDesc(Integer orderId);
}
