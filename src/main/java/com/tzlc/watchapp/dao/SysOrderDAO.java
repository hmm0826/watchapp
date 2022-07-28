package com.tzlc.watchapp.dao;


import com.tzlc.watchapp.dao.custom.SysOrderCustomDAO;
import com.tzlc.watchapp.model.SysOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * @program: watchapp
 * @description:
 * @author: StevenWang
 * @create: 2019-10-10 16:33
 **/
@Repository
public interface SysOrderDAO extends JpaRepository<SysOrder, Integer>, SysOrderCustomDAO {


}
