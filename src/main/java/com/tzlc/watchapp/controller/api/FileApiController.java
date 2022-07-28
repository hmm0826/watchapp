package com.tzlc.watchapp.controller.api;

import com.tzlc.watchapp.common.result.RestResult;
import com.tzlc.watchapp.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("${api-prefix}/file")
@Slf4j
public class FileApiController {
    @Autowired
    FileService fileService;

    @PostMapping("upload")
    public RestResult test(@RequestParam("file") MultipartFile file) throws IOException {
        return fileService.upload(file);
    }


}
