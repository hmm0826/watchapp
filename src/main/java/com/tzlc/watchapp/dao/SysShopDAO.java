package com.tzlc.watchapp.dao;


import com.tzlc.watchapp.dao.custom.SysShopCustomDAO;
import com.tzlc.watchapp.model.SysShop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysShopDAO extends JpaRepository<SysShop, Integer>, SysShopCustomDAO {

}
