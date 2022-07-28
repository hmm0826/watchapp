package com.tzlc.watchapp.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class SysUserRoleDTO implements Serializable {

    private static final long serialVersionUID = 1714273568819428630L;

    //private static final long serialVersionUID = -2344063315535495335L;

    @Id
    private Integer id;

    private String name;
}
