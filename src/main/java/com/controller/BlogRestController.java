package com.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.modle.Blog;
import com.service.BlogService;
import com.sun.tools.jdeps.resources.jdeps;
import com.util.JedisUtil;

import redis.clients.jedis.Jedis;

@RestController
@RequestMapping("/rest/blog")
public class BlogRestController
{
    @Autowired
    private BlogService blogService;
    
    @RequestMapping("/blogadd")
    public Map<String, Object> blogadd(Blog blog){
       
        Map<String, Object> resultmap=new HashMap<>();
        blog.setCreatedate(new Date());
        blog.setRowguid(UUID.randomUUID().toString());;
        boolean b=blogService.blogadd(blog);
        if(b){
            resultmap.put("code","1");
        }else{
            resultmap.put("code","0");
        }
        
//        Jedis jedis=JedisUtil.getInstance().getJedis();   
//        for (int i = 0; i < 10; i++) {   
//            jedis.set("test", "test");   
//            System.out.println(i+"=="+jedis.get("test"));    
//          
//        }  
//        JedisUtil.getInstance().returnJedis(jedis);  
        return resultmap;
    }
    
    @RequestMapping("/bloglist")
    public Map<String, Object> bloglist(){
        Map<String, Object> resultmap=new HashMap<>();
        List<Blog> blist= blogService.bloglist();
        if(blist!=null&blist.size()>0){
            resultmap.put("code","1");
            resultmap.put("blist",blist);
        }else{
            resultmap.put("code","0");
        }
        return resultmap;
    }
    
    @RequestMapping("/delBlog")
    public Map<String, Object> delBlog(String bguid){
        Map<String, Object> resultmap=new HashMap<>();
        int a=blogService.delBlog(bguid);
        if(a>0){
            resultmap.put("code","1");
        }else{
            resultmap.put("code","0");
        }
        return resultmap;
    }

}
