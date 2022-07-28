package com.tzlc.watchapp.service.Impl;


import cn.leancloud.AVFile;
import cn.leancloud.core.AVOSCloud;
import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.service.FileService;
import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@Service
public class FileServiceImpl implements FileService {

    @Value("${leancloud.appid}")
    private String appId;
    @Value("${leancloud.secret}")
    private String appKey;

    @Override
    public RestResult upload(MultipartFile uploadFile) throws IOException {
        // 1. 初始化
        AVOSCloud.initialize(appId, appKey);
        // 2. 构建文件
        AVFile file = new AVFile(uploadFile.getName(), uploadFile.getBytes());
        // 3. 上传
        file.saveInBackground().subscribe(new Observer<AVFile>() {
            public void onSubscribe(Disposable disposable) { }

            public void onNext(AVFile file) {
                log.info("...文件保存完成。objectId：" + file.getObjectId());
            }

            public void onError(Throwable throwable) {
                // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
                log.info("...保存失败...");
                throwable.printStackTrace();
            }

            public void onComplete() {
                log.info("...保存完成...");
            }
        });
        return RestResult.success(file.getUrl());
    }
}
