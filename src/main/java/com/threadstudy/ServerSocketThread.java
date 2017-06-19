package com.threadstudy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
/**
 * <p>
 * Socket线程服务类
 * <p>
 * 
 * @author <a href="mailto:yangkj@corp.21cn.com">yangkj</a>
 * @version
 * @since 2017年1月13日
 */
public class ServerSocketThread extends Thread {

    private Socket socket;

    public ServerSocketThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        InputStream is = null;
        InputStreamReader isr = null;
        BufferedReader br = null;
        OutputStream os = null;
        PrintWriter pw = null;
        try {
            // socket获取字节输入流
            is = socket.getInputStream();
            // 将字节输入流转字符输入流
            isr = new InputStreamReader(is);
            // 将字符输入流转行输入流
            br = new BufferedReader(isr); //
            String message = null;
            while ((message = br.readLine()) != null) {
                System.out.println("客户端发来消息：" + message);
            }
            // 必须先关闭输入流才能获取下面的输出流
            socket.shutdownInput();
            // 获取输出流
            os = socket.getOutputStream();
            pw = new PrintWriter(os);
            pw.write("欢饮您进入socket");
            pw.flush();
            // 关闭输入流
            socket.shutdownOutput();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 关闭资源
            if (pw != null) {
                pw.close();
            }
            try {
                if (br != null) {
                    br.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (isr != null) {
                    isr.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (os != null) {
                    os.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (br != null) {
                    br.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (isr != null) {
                    isr.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}