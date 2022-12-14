package com.tzlc.watchapp.model.bean;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DictNode {
    private String dictKey;
    private String dictValue;
    private Map<String, DictNode> childNode;
}
