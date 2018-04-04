//价格日历组件
//2017.8.24 van

//parmas 配置项
//data 导入数据  数组格式 date 属性必传用于记录日期值
//startDate 日历开始时间
//endDate 日历结束时间
//config 配置项 用于给日历的对应天数的data添加值 [key:"",name:""]
//show 日历显示的字段值 [key:"显示字段",name:"显示的html"]
//useDefault 默认数据
var useDefault = {
    config: [{
        key: 'buyNumMax',
        name: '最多购买数'
    },
    {
        key: 'stock',
        name: '库存'
    },
    {
        key: 'price',
        name: '分销售价'
    }
    ],
    show: [{
        key: 'price',
        name: '分:￥'
    },
    {
        key: 'stock',
        name: '库:'
    }
    ],
    mockData: [{
        date: "2017-07-12",
        stock: "9000",
        buyNumMax: "50",
        buyNumMin: "1",
        price: "12.00",
        priceMarket: "100.00",
        priceSettlement: "90.00",
        priceRetail: "99.00"
    }]
}
function calendarExt(parmas,cb,angelback) {
    //测试数据
    var mockData = parmas.data || useDefault.mockData;

    if (!parmas.data) {
        modData();
    }

    $.CalendarPrice({
        el: '.container',
        startDate: parmas.startDate || '2017-08-02', 
        endDate: parmas.endDate || '2018-09',
        data: mockData,
        // 配置需要设置的字段名称
        config: parmas.config || useDefault.config,
        // 配置在日历中要显示的字段
        show: parmas.show || useDefault.show,
        callback: function (data) {
            //console.log(确认);
            cb(data);
        },
        cancel: function () {
            console.log('取消设置 ....');
            // 取消设置
            // 这里可以触发关闭设置窗口
            cb('cancel')
        },
        error: function (err) {
            if (top.toastr) { top.toastr.warning(err.msg); }
            else { alert(err.msg); }
            
        },
        // 自定义颜色
        style: {
            // 头部背景色
            headerBgColor: parmas['headerBgColor'] || '#098cc2',
            // 头部文字颜色
            headerTextColor: parmas['headerTextColor'] || '#fff',
            // 周一至周日背景色，及文字颜色
            weekBgColor: parmas['weekBgColor'] || '#098cc2',
            weekTextColor: parmas['weekTextColor'] || '#fff',
            // 周末背景色，及文字颜色
            weekendBgColor: parmas['weekendBgColor'] || '#098cc2',
            weekendTextColor: parmas['weekendTextColor'] || '#fff',
            // 有效日期颜色
            validDateTextColor: parmas['validDateTextColor'] || '#333',
            validDateBgColor: parmas['validDateBgColor'] || '#fff',
            validDateBorderColor: parmas['validDateBorderColor'] || '#eee',
            // Hover
            validDateHoverBgColor: parmas['validDateHoverBgColor'] || '#098cc2',
            validDateHoverTextColor: parmas['validDateHoverTextColor'] || '#fff',
            // 无效日期颜色
            invalidDateTextColor: parmas['invalidDateTextColor'] || '#ccc',
            invalidDateBgColor: parmas['invalidDateBgColor'] || '#fff',
            invalidDateBorderColor: parmas['invalidDateBorderColor'] || '#eee',
            // 底部背景颜色
            footerBgColor: parmas['footerBgColor'] || '#fff',
            // 重置按钮颜色
            resetBtnBgColor: parmas['resetBtnBgColor'] || '#77c351',
            resetBtnTextColor: parmas['resetBtnTextColor'] || '#fff',
            resetBtnHoverBgColor: parmas['resetBtnHoverBgColor'] || '#55b526',
            resetBtnHoverTextColor: parmas['resetBtnHoverTextColor'] || '#fff',
            // 确定按钮
            confirmBtnBgColor: parmas['confirmBtnBgColor'] || '#098cc2',
            confirmBtnTextColor: parmas['confirmBtnTextColor'] || '#fff',
            confirmBtnHoverBgColor: parmas['confirmBtnHoverBgColor'] || '#00649a',
            confirmBtnHoverTextColor: parmas['confirmBtnHoverTextColor'] || '#fff',
            // 取消按钮
            cancelBtnBgColor: parmas['cancelBtnBgColor'] || '#fff',
            cancelBtnBorderColor: parmas['cancelBtnBorderColor'] || '#bbb',
            cancelBtnTextColor: parmas['cancelBtnTextColor'] || '#999',
            cancelBtnHoverBgColor: parmas['cancelBtnHoverBgColor'] || '#fff',
            cancelBtnHoverBorderColor: parmas['cancelBtnHoverBorderColor'] || '#bbb',
            cancelBtnHoverTextColor: parmas['cancelBtnHoverTextColor'] || '#666'
        },
        // 点击有效的某一触发的回调函数
        // 注意：配置了此参数，设置窗口无效，即不能针对日期做参数设置
        // 返回每天的数据
        //everyday: function (dayData) {
        //    //console.log('点击某日，返回当天的数据');
        //    //console.log(dayData);
        //    if (angelback) angelback(dayData);
            
        //},
        // 隐藏底部按钮（重置、确定、取消），前台使用该插件时，则需要隐藏底部按钮
        //        hideFooterButton: true
    });
}


function randNum(max) {
    return Math.round(Math.random() * max);
}

function fd(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

function modData() {
    for (var i = 0; i < 100; i++) {
        useDefault.mockData.push({
            date: '2017-' + fd(i % 5 + 6) + '-' + fd(randNum(30)),
            stock: i * 21,
            buyNumMax: "50",
            buyNumMin: "1",
            price: randNum(i) + '.00',
            priceMarket: "100.00",
            priceSettlement: "90.00",
            priceRetail: "99.00"
        });
    }
}