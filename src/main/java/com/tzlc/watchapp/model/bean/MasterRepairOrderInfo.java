package com.tzlc.watchapp.model.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MasterRepairOrderInfo {
    private Integer id;
    private String customerName;
    private String customerPhone;
    private String orderNo;
    private String entrustedMail;
    private Boolean insure;
    private Integer watchBrandId;
    private String watchSerie;
    private String watchModel;
    //@DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM")
    private Date purchaseTime;
    private Boolean repairBefore;
    private String purchasePlace;
    private Integer watchFunction;
    private Integer watchMovement;
    private Integer caseMaterial;
    private Integer watchbandMaterial;
    private Integer claspMaterial;
    private Integer watchExterior;
    private Integer repairParts;
    private String tablehandleButton;
    private String customerProfile;
    private String positiveItemPhoto;
    private String positiveItemDesc;
    private String backItemPhoto;
    private String backItemDesc;
    private String sideItemPhoto;
    private String sideItemDesc;
    private String problemPhoto;
    private String problemDescription;
    private BigDecimal payPrice;


    public Date getPurchaseTime() {
        if(StringUtils.isEmpty(purchaseTime)){
            return null;
        }
        return (Date)purchaseTime.clone();
    }

    public void setPurchaseTime(Date purchaseTime) {
        if(!StringUtils.isEmpty(purchaseTime)){
            this.purchaseTime = (Date)purchaseTime.clone();
        }
    }


}
