package com.tzlc.watchapp.dao.custom;

import com.tzlc.watchapp.model.dto.SysUserRoleDTO;

import java.util.List;

public interface SysUserCustomDAO {

    List<SysUserRoleDTO> findUserRoleByUser(int userId);

//    SysShopDTO findShopInfoAndContactById(Integer shopId);

}
