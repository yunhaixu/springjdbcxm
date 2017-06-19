package com.threadstudy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;

/**
 * <p>
 * 基于socket通讯-客户端
 * <p>
 * 
 * @author <a href="mailto:yangkj@corp.21cn.com">yangkj</a>
 * @version
 * @since 2017年1月12日
 */
public class Client {

    public static void main(String[] args) {

        Socket socket = null;
        OutputStream os = null;
        PrintWriter pw = null;
        InputStream is = null;
        InputStreamReader isr = null;
        BufferedReader br = null;
        try {
            socket = new Socket("127.0.0.1", 9090);
            // 获取输出流向服务端写入数据
            os = socket.getOutputStream();
            pw = new PrintWriter(os);
            pw.write("用户名：admin 密码：123");
            pw.flush();
            socket.shutdownOutput();
            // 获取输入流接受服务端返回的信息
            is = socket.getInputStream();
            isr = new InputStreamReader(is);
            br = new BufferedReader(isr);
            String message = null;
            while ((message = br.readLine()) != null) {
                System.out.println("服务器说：" + message);
            }
            socket.shutdownInput();

        } catch (UnknownHostException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
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
            if (pw != null) {
                pw.close();
            }
            try {
                if (os != null) {
                    os.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (socket != null) {
                    socket.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}