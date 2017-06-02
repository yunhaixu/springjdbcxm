/*！
 *date:2017-3-18 18:26:12
 *author: 数据分析 陈轩;
 */

$(function() {


    var pie = echarts.init(document.getElementById('pie')),
        bar03 = echarts.init(document.getElementById('bar03')),
        bar04 = echarts.init(document.getElementById('bar04')),
        radar = echarts.init(document.getElementById('radar'));


    var pieOption = {
            title: {
                text: "湖北省格式取号top10",
                textStyle: {
                    color: "#999",
                    fontSize: 14,
                    fontWeight: "normal"
                },
                left: 150
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top: 50,
                left: 10,
                height: 120,
                itemWidth: 15,
                itemHeight: 12,
                data: ['武汉市', '黄石市', '十堰市', '荆州市', '宜昌市', '襄阳市', '鄂州市', '荆门市', '孝感市', '黄冈市']
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                center: ['65%', '55%'],
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '武汉市' },
                    { value: 310, name: '黄石市' },
                    { value: 234, name: '十堰市' },
                    { value: 135, name: '荆州市' },
                    { value: 1548, name: '宜昌市' },
                    { value: 335, name: '襄阳市' },
                    { value: 310, name: '鄂州市' },
                    { value: 234, name: '荆门市' },
                    { value: 135, name: '孝感市' },
                    { value: 1548, name: '黄冈市' }
                ]
            }]
        },

        bar03Option = {
            color: ["#5ab6c1"],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: 0,
                right: '6%',
                bottom: '3%',
                top: 0,
                containLabel: true
            },
            yAxis: [{
                type: 'category',
                data: ['综合服务(国税局)', '综合受理(人社局)', '纳税申请(地税局)', '普通受理(审批局注册类)', '发票代开、缴纳罚款(国税局)', '户口淮迁证核发(公安局)', '银行缴费(人社局)', '发票认证(国税局)', '发票领用(国税局)', '居民身份证核发(公安局)'],
                axisLine: {
                    lineStyle: {
                        color: '#0068b7'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#666',
                        fontSize: 10
                    },
                    interval: 0
                }
            }],
            barWidth: 13,
            xAxis: [{
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#666'
                    }
                },
                axisTick: false,
                axisLine: {
                    lineStyle: {
                        color: '#0068b7'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#d9e1ea'
                    }
                }
            }, {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#d9e1ea'
                    }
                },
                axisTick: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }],
            series: [{
                name: '汇总对比',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: "#666"
                        }
                    }
                },
                data: [19000, 18000, 16000, 15000, 13000, 11000, 10000, 8000, 6000, 3000]
            }]
        },

        bar04Option = {
            color: ["#5ab6c1"],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: 0,
                right: '6%',
                bottom: '3%',
                top: 0,
                containLabel: true
            },
            yAxis: [{
                type: 'category',
                data: ['张三(国税局)', '张思(人社局)', '张伟(地税局)', '涨了(审批局注册类)', '将近(国税局)', '一样(公安局)', '合影(人社局)', '一样(国税局)', '单独(国税局)', '一页(公安局)'],
                axisTick: false,
                axisLine: {
                    lineStyle: {
                        color: '#0068b7'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#666'
                    },
                    interval: 0
                }
            }],
            barWidth: 13,
            xAxis: [{
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#666'
                    }
                },
                axisTick: false,
                axisLine: {
                    lineStyle: {
                        color: '#0068b7'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#d9e1ea'
                    }
                }
            }, {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#d9e1ea'
                    }
                },
                axisTick: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }],
            series: [{
                name: '汇总对比',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: "#666"
                        }
                    }
                },
                data: [19000, 18000, 16000, 15000, 13000, 11000, 10000, 8000, 6000, 3000]
            }]
        },

        radarOption = {
            color: ['rgba(10,120,203,.6)'],
            radar: [{
                splitLine: {
                    lineStyle: {
                        color: '#d8d8d8'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(114, 172, 209, 0)',
                            'rgba(114, 172, 209, 0)', 'rgba(114, 172, 209,0)',
                            'rgba(114, 172, 209, 0)', 'rgba(114, 172, 209, 0)'
                        ],
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#333'
                    }
                },
                indicator: [
                    { text: '9:00-10:00', max: 6000 },
                    { text: '16:00-17:00', max: 16000 },
                    { text: '15:00-16:00', max: 30000 },
                    { text: '14:00-15:00', max: 38000 },
                    { text: '13:00-14:00', max: 52000 },
                    { text: '12:00-13:00', max: 25000 },
                    { text: '11:00-12:00', max: 25000 }

                ],
                radius: 62
            }],

            tooltip: { trigger: 'item' },

            calculable: true,

            series: [{
                name: '',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [{
                    value: [4300, 10000, 28000, 35000, 50000, 19000, 18000],
                    name: '完全开放'
                }]
            }]
        };

    pie.setOption(pieOption);
    bar03.setOption(bar03Option);
    bar04.setOption(bar04Option);
    radar.setOption(radarOption);




});
