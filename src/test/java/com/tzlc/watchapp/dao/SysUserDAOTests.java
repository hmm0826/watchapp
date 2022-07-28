package com.tzlc.watchapp.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * @description
 * @author: lhr
 * @date: 2020/11/4 18:07
 */

@SpringBootTest
public class SysUserDAOTests {

    @Autowired
    SysUserDAO sysUserDAO;
    @Test
    void testFindAll() {
        sysUserDAO.findAll().stream().forEach(System.out::println);
    }
}
