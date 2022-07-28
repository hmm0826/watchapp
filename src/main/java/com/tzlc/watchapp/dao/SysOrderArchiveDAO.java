package com.tzlc.watchapp.dao;

import com.tzlc.watchapp.model.SysOrderArchive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SysOrderArchiveDAO extends JpaRepository<SysOrderArchive,Integer> {
}
