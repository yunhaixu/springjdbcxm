package com.dao.implement;

import org.springframework.stereotype.Repository;

import com.dao.UserDao;
import com.modle.User;

@Repository
public class UserDaoImpl extends JdbcBaseDaoImpl<User> implements UserDao {

}
