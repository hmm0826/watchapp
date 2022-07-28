package com.tzlc.watchapp.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SysOrderArchiveVO  implements Serializable {
    private static  final long serialVersionUID = -7102194439574609226L;
    private Integer orderId;
    private String positiveItemPhoto;
    private String positiveItemDesc;
    private String backItemPhoto;
    private String backItemDesc;
    private String sideItemPhoto;
    private String sideItemDesc;
    private String problemPhoto;
    private String problemDesc;
    private String itemPhoto;
    private String itemDesc;
    private String repairPhoto;
    private String repairDesc;
    private Date createDatetime;
    private Integer createBy;
}
