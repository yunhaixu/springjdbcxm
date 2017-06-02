(function(win, $) {

    $('[placeholder]').placeholder();

    var $registerForm = $('#registerForm'),
        $registerForm2 = $('#registerForm2'),
        $input = $('.ewb-form-row input', $registerForm),
        $input2 = $('.ewb-form-row input', $registerForm2);

    new TabView({
        hdDom: '.hd-item',
        bdDom: '.ewb-form',
        activeClass: 'hd-cur',
        event: 'click',
        activeIndex: 0
    });

    /*  添加自定义校验 */

    // 手机号码和固话规则
    $.validator.addMethod('isPhone', function(value, element) {
        var length = value.length;
        var mobile = /^1[34578]\d{9}$/;
        var tel = /0\d{2,3}-\d{5,9}|0\d{2,3}-\d{5,9}/;
        return this.optional(element) || (tel.test(value) || mobile.test(value));
    }, '请正确填写您的联系电话');

    // 用户名支持字母、数字、下划线组合，需以字母开头
    $.validator.addMethod('isUser', function(value, element) {
        var length = value.length;
        var username = /^[a-zA-Z]+[a-zA-Z0-9_]*$/;
        return this.optional(element) || username.test(value);
    }, '需字母开头,数字和下划线');

    // 密码不能有空格
    $.validator.addMethod('isPwd', function(value, element) {
        var length = value.length;
        var passWord = /^\S*$/;
        return this.optional(element) || passWord.test(value);
    }, '密码不能有空格');

    // 身份证号码
    $.validator.addMethod('isCard', function(value, element) {
        var length = value.length;
        var card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return this.optional(element) || card.test(value);
    }, '身份证号码不合法');

    // 统一社会信用代码
    $.validator.addMethod('isPublic', function(value, element) {
        var length = value.length;
        var publicCode = /[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}/;
        return this.optional(element) || publicCode.test(value);
    }, '统一社会信用代码不合法');





    // 表单验证规则
    var rules1 = {
        rules: {
            userName: {
                required: true,
                isUser: true,
                rangelength: [3, 20]
            },
            password: {
                required: true,
                isPwd: true,
                minlength: 6,
                maxlength: 20
            },
            confirmpwd: {
                required: true,
                isPwd: true,
                minlength: 6,
                maxlength: 20,
                equalTo: "#password"
            },
            contacts: "required",
            mobile: {
                required: true,
                isPhone: true
            },
            phone: {
                required: true,
                isPhone: true
            },
            QQ: {
                required: true,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            identity: {
                required: true,
                isCard: true
            },
            agree: "required",
            topic: {
                required: "#agree:checked",
                minlength: 2
            },
            code: {
                required: true
            }
        },
        messages: {
            userName: {
                required: "请输入用户名",
                rangelength: "用户名为3-20个字符"
            },
            password: {
                required: "请输入密码",
                minlength: "密码最少6个字符",
                maxlength: "密码最多20个字符"
            },
            confirmpwd: {
                required: "请输入确认密码",
                minlength: "密码最少6个字符",
                maxlength: "密码最多20个字符",
                equalTo: "两次输入密码须一致"
            },
            contacts: "请输入联系人",
            mobile: {
                required: "请输入联系电话"
            },
            phone: {
                required: "请输入固定电话"
            },
            identity: {
                required: "请输入身份证号码",
                isCard: "请输入正确的身份证号码"
            },
            code: {
                required: "请输入验证码"
            }
        },
        debug: true
    }

    var validator = $registerForm.validate(rules1);

    // 表单验证规则
    var rules2 = {
        rules: {
            mobile: {
                required: true,
                isPhone: true
            },
            password2: {
                required: true,
                isPwd: true,
                minlength: 6,
                maxlength: 20
            },
            confirmpwd2: {
                required: true,
                isPwd: true,
                minlength: 6,
                maxlength: 20,
                equalTo: "#password2"
            },
            contacts: "required",
            identity: {
                required: true,
                isPublic: true
            },
            code2: {
                required: true
            }
        },
        messages: {
            mobile: {
                required: "请输入手机号",
                isPhone: "请输入正确的手机号"
            },
            password2: {
                required: "请输入密码",
                minlength: "密码最少6个字符",
                maxlength: "密码最多20个字符"
            },
            confirmpwd2: {
                required: "请输入确认密码",
                minlength: "密码最少6个字符",
                maxlength: "密码最多20个字符",
                equalTo: "两次输入密码须一致"
            },
            contacts: "请输入联系人",
            identity: {
                required: "请输入统一社会信用代码",
                isPublic: "请输入正确的统一社会信用代码"
            },
            code2: {
                required: "请输入验证码"
            }
        },
        debug: true
    };
    var validator2 = $registerForm2.validate(rules2);

    function postSubmit(type) {
        var cur_validator,
            dom;
        if (type == 'personal') {
            cur_validator = validator;
            dom = $registerForm;
        } else {
            cur_validator = validator2;
            dom = $registerForm2;
        }
        dom.on('click', '.reg-btn', function() {
            if (cur_validator.form()) {
                var formInfo = dom.serializeArray(),
                    ajaxParams = {},
                    postParams = '';
                for (var i = 0; i < formInfo.length; i++) {
                    eval('ajaxParams.' + formInfo[i].name + '=formInfo[i].value;');
                };
                Util.ajax({
                    url: '../../json/login.json',
                    data: JSON.stringify(ajaxParams),
                    success: function(data) {
                        alert(data.success);
                        // 重置表单
                        validator.resetForm();
                        dom.find('input').val('');
                    }
                })
            }
        });
    };

    // 提交方式改为post
    postSubmit('personal');
    postSubmit();

}(this, jQuery))
