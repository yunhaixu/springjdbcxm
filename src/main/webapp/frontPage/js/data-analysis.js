/*！
 *淮安大屏
 *date:2017-3-8 08:26:12
 *author: 数据分析;
 */

$(function() {
    var wechart = $("#wechart"),
        app = $("#app"),
        website = $("#website"),
        htmldata = [];
    var piedata = [335, 310, 234],
        adddata = piedata[0] + piedata[1] + piedata[2];
    $.each(piedata, function(i, item) {
        var data = (item / adddata * 100).toFixed(2) + "%";
        htmldata.push(data);
    });
    reloadecharts();

    function reloadecharts() {
        var pie = echarts.init(document.getElementById('pie')),
            bar01 = echarts.init(document.getElementById('bar01')),
            bar02 = echarts.init(document.getElementById('bar02')),
            bar03 = echarts.init(document.getElementById('bar03')),
            bar04 = echarts.init(document.getElementById('bar04')),
            bar05 = echarts.init(document.getElementById('bar05')),
            area = echarts.init(document.getElementById('area')),
            radar = echarts.init(document.getElementById('radar'));

        var pieOption = {
                color: ["#5eaae0", "#b283c9", "#74cfc8"],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: '60%',
                    top: '32px',
                    data: [{ name: '微信', icon: "image:/analyst/images//wechart.png" }, { name: 'APP', icon: "image://images/analyst/app.png" }, { name: '门户网站', icon: "image://images/analyst/website.png" }]
                },
                series: [{
                    name: '访问数据',
                    type: 'pie',
                    radius: '75%',
                    center: ['25%', '50%'],
                    data: [
                        { value: piedata[0], name: '微信' },
                        { value: piedata[1], name: 'APP' },
                        { value: piedata[2], name: '门户网站' }
                    ],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }, {
                    name: 'outline',
                    type: 'pie',
                    clickable: false,
                    center: ['25%', '50%'],
                    radius: [57, 58],
                    itemStyle: {
                        normal: { color: '#e4e4e4', label: { show: false }, lableLine: { show: false } },
                        emphasis: { color: '#e4e4e4' }
                    },
                    data: [{ value: 58, name: "outline" }]
                }]
            },

            bar01Option = {
                color: ["#5eaae0", "#f98a30"],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['取号量', '增长速度'],
                    left: "50%",
                    top: "10px"
                },
                xAxis: [{
                    type: 'category',
                    data: ['2011年', '2012年', '2013年', '2014年', '2015年'],
                    axisTick: false,
                    axisLine: {
                        lineStyle: {
                            color: '#0068b7'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    }
                }],
                barWidth: 20,
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 80,
                    interval: 20,
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
                    }
                }, {
                    type: 'value',
                    min: 0,
                    max: 16,
                    interval: 4,
                    axisLabel: {
                        formatter: '{value}'
                    },
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
                    }
                }],
                series: [{
                        name: '取号量',
                        type: 'bar',
                        data: [50, 50, 53, 60, 70]
                    },

                    {
                        name: '增长速度',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [9, 8, 10, 8.7, 12]
                    }
                ]
            },

            areaOption = {
                color: ["#bae2f4"],
                title: {
                    subtext: "就业人员（万人）",
                    subtextStyle: {
                        color: "#666"
                    },
                    top: "-30",
                    left: "30"
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '20%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['9:00', '11:00', '13:00', '15:00', '17:00'],
                    axisLine: {
                        lineStyle: {
                            color: '#0068b7'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    },
                    axisTick: false
                }],
                yAxis: [{
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#0068b7'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    },
                    axisTick: false,
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
                    name: '就业人员（万人）',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [10, 20, 35, 24, 21]
                }]
            },

            bar02Option = {
                color: ["#5ab6c1"],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                    axisTick: false,
                    axisLine: {
                        lineStyle: {
                            color: '#0068b7'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    }
                }],
                barWidth: 20,
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
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
                            position: 'top',
                            formatter: "{c}%",
                            textStyle: {
                                color: "#666"
                            }
                        }
                    },
                    data: [40, 50, 55, 86, 60, 38, 14]
                }]
            },

            bar03Option = {
                color: ["#5eaae0"],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
                barWidth: 20,
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 25,
                    interval: 5,
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
                            position: 'top',
                            formatter: "{c}%",
                            textStyle: {
                                color: "#666"
                            }
                        }
                    },
                    data: [6.4, 12.3, 14.5, 13.5, 12.5, 13.1, 20.5, 15.0, 9.4, 9.3, 4.3, 4.6]
                }]
            },

            bar04Option = {
                color: ["#5ab6c1"],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '5%',
                    right: '3%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
                    axisTick: false,
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
                        formatter: function(params) {
                            return params.replace(/-/, "-\n");

                        },
                        interval: 0
                    }
                }],
                barWidth: 20,
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
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
                    name: '本月取号',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: "{c}%",
                            textStyle: {
                                color: "#666"
                            }
                        }
                    },
                    data: [40, 50, 55, 86, 60, 38, 14]
                }]
            },

            bar05Option = {
                color: ["#b283c9"],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '1.5%',
                    right: '0',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['一季度(0-3月)', '二季度(4-6月)', '三季度(7-9月)', '四季度(10-12月)'],
                    axisTick: false,
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
                        formatter: function(params) {
                            return params.replace(/度/, "度\n");

                        },
                        interval: 0
                    }
                }],
                barWidth: 20,
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
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
                    name: '本月取号',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: "{c}%",
                            textStyle: {
                                color: "#666"
                            }
                        }
                    },
                    data: [40, 50, 55, 86]
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
        bar01.setOption(bar01Option);
        area.setOption(areaOption);
        bar02.setOption(bar02Option);
        bar03.setOption(bar03Option);
        bar04.setOption(bar04Option);
        bar05.setOption(bar05Option);
        radar.setOption(radarOption);
    }

    // 给legend后面添加数据
    wechart.html(htmldata[0]);
    app.html(htmldata[1]);
    website.html(htmldata[2]);



});
