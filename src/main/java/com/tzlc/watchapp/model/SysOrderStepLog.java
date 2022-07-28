package com.tzlc.watchapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.tzlc.watchapp.model.key.SysOrderStepLogKey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SysOrderStepLogKey.class)
public class SysOrderStepLog implements Serializable {
    private static final long serialVersionUID = -3267695323828215781L;

    @Id
    @Column(name = "order_id")
    private Integer orderId;

    @Column(name = "user_id")
    private Integer userId;

    @Id
    @Column(name = "order_step")
    private Integer orderStep;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "create_datetime")
    private Date createDatetime;
}
