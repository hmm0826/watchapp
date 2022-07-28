package com.tzlc.watchapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.tzlc.watchapp.model.SysShopUserKey;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="sys_shop_user")
@IdClass(SysShopUserKey.class)
public class SysShopUser implements Serializable {

    private static final long serialVersionUID = 9114545858911789746L;

    @Id
    @Column(name = "shop_id")
    private Integer shopId;

    @Column(name = "user_id")
    private Integer userId;
}
