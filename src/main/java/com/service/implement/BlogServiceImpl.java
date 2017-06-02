package com.service.implement;

import java.util.List;

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
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void delBlog(String bguid) {
        // TODO Auto-generated method stub
        
    }

}
