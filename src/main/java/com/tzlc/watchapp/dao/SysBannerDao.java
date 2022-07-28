package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.dao.custom.SysUserCustomDAO;
import com.tzlc.watchapp.model.SysBanner;
import com.tzlc.watchapp.model.SysUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysBannerDao extends JpaRepository<SysBanner,Integer> {
    List<SysBanner> findByOrderBySeq();
}
