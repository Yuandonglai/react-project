import React from 'react'
import styles from './LoginPage.css';
import { withRouter } from 'dva/router';

// function LoginPage() {
//     return (
//            <div className={styles.warp}>
//                 <div className={styles.box}>
//                     <div className={styles.title}>
//                         <p className={styles.tit}>知乎</p>
//                         <span className={styles.text}>注册知乎，发现更多可信赖的解答</span>
//                     </div>
//                     <div className={styles.connect}>
//                         <form>
//                             <div className={styles.tel}></div>
//                             <div className={styles.code}></div>
//                             <button>注册</button>
//                         </form>
//                         <div className={styles.con_footer}>
//                             <p className={styles.xieyi}>注册即代表同意《知乎协议》《隐私保护指引》</p>
//                             <span className={styles.org}>注册机构号</span>
//                         </div>
//                     </div>
//                     <div className={styles.login}>
//                         <span>已有账号？</span>
//                         <a href="javascript:;" className={styles.a}>登录</a>
//                     </div>
//                 </div>
//            </div>
//     );
// }

// LoginPage.propTypes = {
// };

// export default connect()(LoginPage);
// 以上是函数式写法

//以下是另一种写法
class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    logins = ()=>{
        console.log(this);
    }
    render() {
        return (
            <div className={styles.warp}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        <p className={styles.tit}>知乎</p>
                        <span className={styles.text}>注册知乎，发现更多可信赖的解答</span>
                    </div>
                    <div className={styles.connect}>
                        <form>
                            <div className={styles.tel}>
                                <div className={styles.area}>
                                    <button type="button" className={styles.area_btn}  onClick={this.logins}>中国&nbsp;+86</button>
                                    <div className={styles.Select_list} role="listbox">
                                        <button className={styles.Select_option} id="Select3-0">中国 +86</button>
                                        <button className={styles.Select_option} id="Select3-1">美国 +1</button>
                                        <button className={styles.Select_option} id="Select3-2">日本 +81</button>
                                        <button className={styles.Select_option} id="Select3-3">中国香港 +852</button>
                                        <button className={styles.Select_option} id="Select3-4">中国澳门 +853</button>
                                        <button className={styles.Select_option} id="Select3-5">中国台湾 +886</button>
                                        <button className={styles.Select_option} id="Select3-6">马来西亚 +60</button>
                                        <button className={styles.Select_option} id="Select3-7">澳大利亚 +61</button>
                                        <button className={styles.Select_option} id="Select3-8">加拿大 +1</button>
                                        <button className={styles.Select_option} id="Select3-9">英国 +44</button>
                                        <button className={styles.Select_option} id="Select3-10">新加坡 +65</button>
                                        <button className={styles.Select_option} id="Select3-11">德国 +49</button>
                                        <button className={styles.Select_option} id="Select3-12">俄罗斯 +7</button>
                                        <button className={styles.Select_option} id="Select3-13">埃及 +20</button>
                                        <button className={styles.Select_option} id="Select3-14">南非 +27</button>
                                        <button className={styles.Select_option} id="Select3-15">希腊 +30</button>
                                        <button className={styles.Select_option} id="Select3-16">荷兰 +31</button>
                                        <button className={styles.Select_option} id="Select3-17">比利时 +32</button>
                                        <button className={styles.Select_option} id="Select3-18">法国 +33</button>
                                        <button className={styles.Select_option} id="Select3-19">西班牙 +34</button>
                                        <button className={styles.Select_option} id="Select3-20">匈牙利 +36</button>
                                        <button className={styles.Select_option} id="Select3-21">意大利 +39</button>
                                        <button className={styles.Select_option} id="Select3-22">罗马尼亚 +40</button>
                                        <button className={styles.Select_option} id="Select3-23">瑞士 +41</button>
                                        <button className={styles.Select_option} id="Select3-24">奥地利 +43</button>
                                        <button className={styles.Select_option} id="Select3-25">丹麦 +45</button>
                                        <button className={styles.Select_option} id="Select3-26">瑞典 +46</button>
                                    </div>
                                </div>
                                <span className={styles.shu}>|</span>
                                <div className={styles.phone}>
                                    <input type="text" className={styles.input_phone} placeholder="手机号" />
                                </div>
                            </div>
                            <div className={styles.code}>
                                <div className={styles.duanxin}>
                                    <input type="text" className={styles.ver_code} placeholder="输入6位短信验证码" />
                                    <p className={styles.btn_code}>获取短信验证码</p>
                                </div>
                                <p className={styles.voice}>接收短信验证码</p>
                            </div>
                            <button type="submit" className={styles.register}>注册</button>

                        </form>
                        <div className={styles.con_footer}>
                            <p className={styles.xieyi}>注册即代表同意 <a className={styles.xieyi1} href="javascript:;">《知乎协议》</a><a className={styles.xieyi1} href="javascript:;">《隐私保护指引》</a></p>
                            <span className={styles.org}>注册机构号</span>
                        </div>
                    </div>
                    <div className={styles.login}>
                        <span>已有账号？</span>
                        <a href="javascript:;" className={styles.a}>登录</a>
                    </div>
                </div>
            </div>
        )
    }
}
LoginPage = withRouter(LoginPage)
export default LoginPage


