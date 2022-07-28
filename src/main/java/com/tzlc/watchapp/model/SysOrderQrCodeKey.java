package com.tzlc.watchapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SysOrderQrCodeKey implements Serializable {


    private static final long serialVersionUID = 4374948027348891577L;
    private Integer orderId;
    private Integer scene;

}
