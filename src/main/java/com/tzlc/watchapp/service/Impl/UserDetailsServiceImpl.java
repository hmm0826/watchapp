package com.tzlc.watchapp.service.Impl;

import com.alibaba.druid.util.StringUtils;
import com.tzlc.watchapp.dao.SysUserDAO;
import com.tzlc.watchapp.model.dto.SysUserRoleDTO;
import com.tzlc.watchapp.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/6 9:41
 */

@Service
@Transactional(rollbackOn = Exception.class)
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private SysUserDAO sysUserDAO;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // 判断用户名是否不为空
        if (StringUtils.isEmpty(username)) {
            throw new UsernameNotFoundException("找不到用户名");
        }

        // 读取用户信息
        SysUser sysUser = sysUserDAO.findByPhoneOrUnionId(username, username);

        // 判断用户是否存在
        if (sysUser == null) {
            throw new UsernameNotFoundException("找不到用户名");
        }

        // 获取用户角色信息
        List<SysUserRoleDTO> roles = sysUserDAO.findUserRoleByUser(sysUser.getId());

        // 将用户角色信息添加到Set<GrantedAuthority>中
        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
        for (SysUserRoleDTO role : roles) {
            GrantedAuthority authority = new SimpleGrantedAuthority(role.getName());
            authorities.add(authority);
        }


        // 返回数据库中的账号、密码、角色，用于Spring Security框架内部自动匹配密码、判断权限
       if (username.equals(sysUser.getUnionId())) {
            return new User(username, new BCryptPasswordEncoder().encode(""), authorities);
        }
        return new User(username, sysUser.getPassword(), authorities);
    }

        //return new User(username,new BCryptPasswordEncoder().encode("123456"), Collections.singleton(new SimpleGrantedAuthority("ROLE_ADMIN")));

}
