package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.modle.User;
import com.service.UserService;

@RestController
@RequestMapping("/rest/user")
public class UserRestController
{
    @Autowired
    private UserService userService;
    
    @RequestMapping("/userlist")
    public Map<String, Object> userlist(){
        Map<String, Object> resultmap=new HashMap<>();
        List<User> u = userService.userlist();
        if(null==u){
            resultmap.put("code", "0");
            resultmap.put("user", "");
            return resultmap;
        }
        else{
            resultmap.put("code", "1");
            resultmap.put("user", u);
            return resultmap;
        }
    }

}
