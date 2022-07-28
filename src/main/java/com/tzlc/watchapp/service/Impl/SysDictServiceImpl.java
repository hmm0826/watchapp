package com.tzlc.watchapp.service.Impl;



import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.dao.SysDictDAO;
import com.tzlc.watchapp.model.SysDict;
import com.tzlc.watchapp.model.bean.DictNode;
import com.tzlc.watchapp.service.SysDictService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional(rollbackOn = Exception.class)
public class SysDictServiceImpl implements SysDictService {
    @Autowired
    private SysDictDAO sysdictDAO;

    //java8 版
    @Override
    public RestResult<Map> findSelector(){
        //1.从数据库获取选择器的字典
        List<SysDict> selectors = sysdictDAO.findByDictParent("selector");
        //2.把选择器字典从List转成Map结构
        Map<String, DictNode> selectorDictMap = selectors.stream()
                .collect(Collectors.toMap(SysDict::getDictKey, dict ->{
                    String key = dict.getDictKey();
                    String value = dict.getDictValue();
                    Map childNode = new HashMap<>();
                    return new DictNode(key,value,childNode);
                },(k1,k2)->k1));
        //3.把选择器字典的键单独获取出来
        Set selectorKeySet = selectorDictMap.keySet();
        //4.通过选择器的键获得选择器的字典
        List<SysDict> selectorChilds = sysdictDAO.findByDictParentIn(selectorKeySet);
        //5.遍历选择器
        for (SysDict dict: selectorChilds) {
            //6.如果dictParent 在选择器中存在 就把这个子选择器放到这个选择器的childNode里面
            String key = dict.getDictKey();
            String value = dict.getDictValue();
            selectorDictMap.get(dict.getDictParent()).getChildNode()
                    .put(dict.getDictKey(), new DictNode(key,value,null));
        }
        return RestResult.success(selectorDictMap);
    }
}
