package com.tzlc.watchapp.service;

import com.tzlc.watchapp.common.result.RestResult;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService {
    RestResult upload(MultipartFile file) throws IOException;
}
