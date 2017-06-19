package com.threadstudy;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
/**
 * <p>
 * 基于socket通讯-服务端
 * <p>
 * 
 * @author <a href="mailto:yangkj@corp.21cn.com">yangkj</a>
 * @version
 * @since 2017年1月12日
 */
public class Server {

    private static ServerSocket SERVER_SOCKET =null;;
    
    static{
        try {
            SERVER_SOCKET = new ServerSocket(9090);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        try {
            System.out.println("******服务器已启动，等待客户端连接*****");
            Socket socket = null;
            while(true){
                //循环监听客户端的连接
                socket = SERVER_SOCKET.accept();
                //新建一个线程ServerSocket，并开启
                new ServerSocketThread(socket).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}