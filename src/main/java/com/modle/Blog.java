package com.modle;

import java.io.Serializable;
import java.util.Date;



@SuppressWarnings("serial")
public class Blog implements Serializable
{
    private String rowguid;
    private String title;
    private String context;
    private Date createdate;
    private String writer;
    public String getRowguid() {
        return rowguid;
    }
    public void setRowguid(String rowguid) {
        this.rowguid = rowguid;
    }
    
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getContext() {
        return context;
    }
    public void setContext(String context) {
        this.context = context;
    }
    
    public Date getCreatedate() {
        return createdate;
    }
    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }
    
    public String getWriter() {
        return writer;
    }
    public void setWriter(String writer) {
        this.writer = writer;
    }
    
}
