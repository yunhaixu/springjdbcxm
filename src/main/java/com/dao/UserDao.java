package com.dao;

import java.util.List;

import com.modle.User;

public interface UserDao extends CommonDao<User, Integer>{
    public void register(User user);
    public User findUserByUserName(final String userName);
    public List<User> getuserlist();
}
