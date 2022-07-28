package com.tzlc.watchapp.dao.custom;

import com.tzlc.watchapp.model.dto.OrderListInfoDTO;
import com.tzlc.watchapp.model.dto.ShopOrderDetailDTO;
import org.springframework.data.domain.Pageable;


import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public interface SysOrderCustomDAO {

    List<OrderListInfoDTO> findOrderListInfoByShopId(Integer shopId, String orderSteps, Date orderLastTimeText, Pageable pageable);

    List<OrderListInfoDTO> findOrderListInfoByUserId(Integer userId, String orderSteps, Date orderLastTimeText, Pageable pageable);

    List<OrderListInfoDTO> searchOrderListInfoByShopId(Integer shopId, String searchValue, Date orderLastTimeDate, Pageable pageable);

    List<OrderListInfoDTO> searchOrderListInfoByUserId(Integer Id, String searchValue, Date orderLastTimeDate, Pageable pageable);

    List<String> loadYearMonthByUserId(Integer userId);

    BigDecimal loadTotalByYearMonth(Integer userId, int year, int month);

    List<ShopOrderDetailDTO> loadOrderDetailByYearMonth(Integer userId, int year, int month);
}
