package com.tzlc.watchapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SysStationNoticeKey implements Serializable {

    private static final long serialVersionUID = -299929518126074985L;
    //private static final long serialVersionUID = -4094989431055578520L;
    private Integer orderId;
    private Integer orderStep;


}
