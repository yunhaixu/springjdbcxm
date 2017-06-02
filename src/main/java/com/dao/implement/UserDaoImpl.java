package com.dao.implement;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import com.dao.UserDao;
import com.modle.User;

@Repository
public class UserDaoImpl extends CommonImpl<User, Integer> implements UserDao {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void register(User user) {
        String sqlStr = "insert into user(uname,pwd) values(?,?)";
        Object[] params = new Object[]{user.getUserName(),user.getPassword()};
        jdbcTemplate.update(sqlStr, params);
    }

    @Override
    public User findUserByUserName(String userName) {
        String sqlStr = "select id,uname,pwd from user where uname=?";
        final User user = new User();
        jdbcTemplate.query(sqlStr, new Object[]{userName}, new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet rs) throws SQLException {
                user.setId(rs.getInt("id"));
                user.setUserName(rs.getString("uname"));
                user.setPassword(rs.getString("pwd"));
            }
        });
        return user;
    }

    @Override
    public List<User> getuserlist() {
        String sql = "select id,uname,pwd from user";
        List<Map<String, Object>> datalist=new ArrayList<>();
        datalist=jdbcTemplate.queryForList(sql);
        List<User> userlist=new ArrayList<>();
        for (Map<String, Object> object : datalist) {
            User user=new User();
            user.setId(Integer.parseInt(object.get("id").toString()));
            user.setUserName(object.get("uname").toString());
            user.setPassword(object.get("pwd").toString());
            userlist.add(user);
        }
        return userlist;
    }

  
  

}
