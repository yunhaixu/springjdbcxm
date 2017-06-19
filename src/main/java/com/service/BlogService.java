package com.service;

import java.util.List;

import com.modle.Blog;

public interface BlogService
{
    /**
     * 
     *  [插入一条博客]
     *  [功能详细描述]
     *  @param blog    
     * @exception/throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public boolean blogadd(Blog blog);
    
    /**
     * 
     *  [展示所有博客]
     *  [功能详细描述]
     *  @return    
     * @exception/throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public List<Blog> bloglist();
    
    /**
     * 
     *  [删除博客]
     *  [功能详细描述]
     *  @param bguid    
     * @exception/throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public int delBlog(String bguid);
    
    /**
     * 
     *  [一句话功能简述]
     *  [功能详细描述]
     *  @param guid
     *  @return    
     * @exception/throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public Blog blogDetail(String guid);

}
