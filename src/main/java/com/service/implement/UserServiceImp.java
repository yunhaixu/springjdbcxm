package com.service.implement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.UserDao;
import com.modle.User;
import com.service.UserService;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserDao userDao;
    

    @Override
    public List<User> userlist() {
        List<User> userlist=userDao.findAll();
        return userlist;
    }


    @Override
    public User queryByUserName(String username) {
        User user=userDao.findByOneField("username", username);
        if(user!=null){
            return  user;
        }
        return null;
    }

}
