package com.tzlc.watchapp.model;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "sys_order_qrcode")
@IdClass(SysOrderQrCodeKey.class)
public class SysOrderQrCode implements Serializable {


    private static final long serialVersionUID = 5846261353257523386L;
    @Id
    @Column(name = "order_id")
    private Integer orderId;
    @Column(name = "code")
    private String code;
    @Column(name = "state")
    private Boolean state;
    @Id
    @Column(name = "scene")
    private Integer scene;

}
