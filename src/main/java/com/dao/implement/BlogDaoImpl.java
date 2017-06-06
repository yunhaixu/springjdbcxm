package com.dao.implement;

import org.springframework.stereotype.Repository;

import com.dao.BlogDao;
import com.modle.Blog;

@Repository
public class BlogDaoImpl extends JdbcBaseDaoImpl<Blog> implements BlogDao
{

}
