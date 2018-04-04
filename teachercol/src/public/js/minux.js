//公共的方法
var minux = {
    //框架侧边栏
    //登录
    methods:{
        login(name){
            var self  = this ;
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.modal_loading = true;
                    $.get("/users/login?usernum="+self.formInline.user+"&password="+self.formInline.password,item=>{
                        if(!item.length) return this.$Message.error('账号密码错误!');
                        setCookie({userid:item[0].userid})
                        this.modal_loading = false;
                        this.loginmodal = false;
                        this.$Message.success('登录成功');
                        reloadPage();
                    })
                } else {
                    this.$Message.error('请按照规则填写账号密码!');
                }
            })
        },
        //退出登录
        extLogin(){
            removeCookie("userid");
            reloadPage();
        }
    }
}
//公共的data
var loadData = {
    spanLeft: 3,
    spanRight: 21,
    //登录表单验证
    ruleInline: {
        user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不可以少于6位', trigger: 'blur' }
        ]
    },
    //登录模态框
    loginmodal: false,
    login_loading: false,
    //登录数据
    formInline: {
        user: '',
        password: ''
    },
}
