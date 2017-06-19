package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.Sha256Hash;
import org.apache.shiro.subject.Subject;
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
    
    @RequestMapping("/login")
    public Map<String, Object> login(String username, String password){
        Map<String, Object> map=new HashMap<>();
        try{
            Subject subject = SecurityUtils.getSubject();
            //sha256加密
            password = new Sha256Hash(password).toHex();
            UsernamePasswordToken token = new UsernamePasswordToken(username, password);
            subject.login(token);
        }catch (UnknownAccountException e) {
           map.put("code", "0");
           map.put("msg", e.getMessage());
           return map;
        }catch (IncorrectCredentialsException e) {
            map.put("code", "0");
            map.put("msg", e.getMessage());
            return map;
        }catch (LockedAccountException e) {
            map.put("code", "0");
            map.put("msg", e.getMessage());
            return map;
        }catch (AuthenticationException e) {
            map.put("code", "0");
            map.put("msg", "账户验证失败");
            return map;
        }
        
        map.put("code", "1");
        map.put("msg", "success");
        return map;
    }
    
    @RequestMapping("/logout")
    public String logout(){
        SecurityUtils.getSubject().logout();
        return "redirect:login.html";
    }

}
