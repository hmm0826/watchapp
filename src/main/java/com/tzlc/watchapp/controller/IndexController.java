package com.tzlc.watchapp.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("*")
public class IndexController {

    @RequestMapping("/")
    public String index () {
        return "index";
    }

    @ResponseBody
    @RequestMapping("/hello")
    public String hello(){
        return "hello world";
    }
}
