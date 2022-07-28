package com.tzlc.watchapp.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.tzlc.watchapp.model.key.SysOrderStepLogKey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

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
public class SysOrderStepLogDTO implements Serializable {
    private static final long serialVersionUID = -3267695323828215781L;

    @Id
    private  Integer orderId;

    private  Integer userId;

    @Id
    private  Integer orderStep;

    private String orderStepText;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createDatetime;
}
