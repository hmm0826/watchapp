package com.tzlc.watchapp.model.key;

import java.io.Serializable;

public class SysOrderStepLogKey implements Serializable {
    private Integer orderId;
    private Integer orderStep;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getOrderStep() {
        return orderStep;
    }

    public void setOrderStep(Integer orderStep) {
        this.orderStep = orderStep;
    }
}
