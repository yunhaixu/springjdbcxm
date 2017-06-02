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
    public User loginCheck(User user) {
        User u  = userDao.findUserByUserName(user.getUserName());
        System.out.println("id="+u.getId()+",  userName="+u.getUserName()+", password="+u.getPassword());
        if(user.getPassword().equals(u.getPassword())){
            return u;
        }
        else{
            return null;
        }
    }

    @Override
    public boolean register(User user) {
        User u =  userDao.findUserByUserName(user.getUserName());
        if(u.getId()==0){
            userDao.register(user);
            return true;
        }
        else{
            System.out.println("id="+u.getId()+",  userName="+u.getUserName()+", password="+u.getPassword());
            return false;
        }
    }

    @Override
    public List<User> userlist() {
        List<User> userlist=userDao.getAll();
//        List<User> userlist= userDao.getuserlist();
        return userlist;
    }

}
