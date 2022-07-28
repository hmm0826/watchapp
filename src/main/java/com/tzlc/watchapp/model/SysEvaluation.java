package com.tzlc.watchapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Table(name="sys_evaluation")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class SysEvaluation implements Serializable {
    private static final long serialVersionUID = 3576056872614443665L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "order_id")
    private Integer orderId;

    @Column(name = "star")
    private Integer star;
    @Column(name = "comment")
    private String comment;
    @Column(name = "repair_item_photo")
    private String repairItemPhoto;
    @Column(name = "create_datetime")
    private Date createDatetime;
    @Column(name = "create_by")
    private Integer createBy;
    @Column(name = "shop_id")
    private String shopId;

}
