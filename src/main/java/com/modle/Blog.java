package com.modle;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Table(name = "user")
public class Blog implements Serializable
{
    private String rowguid;
    private String title;
    private String context;
    private Date createdate;
    private String writer;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "rowguid")
    public String getRowguid() {
        return rowguid;
    }
    public void setRowguid(String rowguid) {
        this.rowguid = rowguid;
    }
    
    @Column(name = "title")
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    
    @Column(name = "context")
    public String getContext() {
        return context;
    }
    public void setContext(String context) {
        this.context = context;
    }
    
    @Column(name = "createdate")
    public Date getCreatedate() {
        return createdate;
    }
    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }
    
    @Column(name = "writer")
    public String getWriter() {
        return writer;
    }
    public void setWriter(String writer) {
        this.writer = writer;
    }
    
}
