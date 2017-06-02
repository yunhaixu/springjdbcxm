package com.service;

import java.util.List;

import com.modle.User;

public interface UserService {
    public boolean register(User user);
    public User loginCheck(User user);
    public List<User> userlist();
}
