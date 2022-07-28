package com.tzlc.watchapp.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SysEvaluationVO {
    private static final long serialVersionUID = 3576056872614443665L;

    @Id
    private Integer id;
    private Integer orderId;
    private Integer star;
    private String comment;
    private String repairItemPhoto;
    private Date createDatetime;
    private Integer createBy;
    private String avatarUrl;
    private String username;
    private String shopId;
}
