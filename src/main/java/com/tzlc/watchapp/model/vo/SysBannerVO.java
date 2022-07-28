package com.tzlc.watchapp.model.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SysBannerVO {
    private static  final long serialVersionUID = 5103647349522011919L;
    private Integer id;
    private String name;
    private String bannerUrl;
    private Integer seq;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date creDatetime;
    private Integer creteBy;

}
