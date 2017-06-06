package com.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BlogDao;
import com.modle.Blog;
import com.service.BlogService;

@Service
public class BlogServiceImpl implements BlogService
{
    @Autowired
    private BlogDao blogdao;

    @Override
    public boolean blogadd(Blog blog) {
        try {
            blogdao.save(blog);
            return true;
        }
        catch (Exception e) {
            return false;
        }
        
    }

    @Override
    public List<Blog> bloglist() {
        List<Blog> blist=new ArrayList<>();
        blist=blogdao.findAll();
        return blist;
    }

    @Override
    public int delBlog(String bguid) {
       if(StringUtils.isNotBlank(bguid)){
          return  1;
       }else{
           return 0;
       }
        
    }

}
