import React from 'react'
import styles from './SignPage.css';
import { withRouter } from 'dva/router';
class SignPage extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className={styles.warp}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        <p className={styles.tit}>知乎</p>
                        <span className={styles.text}>登录知乎，发现更多可信赖的解答</span>
                    </div>
                    <div className={styles.connect}>
                        <form>
                            <div className={styles.tel}>
                                <div className={styles.phone}>
                                    <input type="text" className={styles.input_phone} placeholder="手机号或邮箱" />
                                </div>
                            </div>
                            <div className={styles.code}>
                                <div className={styles.duanxin}>
                                    <input type="text" className={styles.ver_code} placeholder="密码" />
                                </div>
                                <div className={styles.options}>
                                    <p className={styles.tel_login}>手机验证码登录</p>
                                    <p className={styles.voice}>忘记密码？</p>
                                </div>
                            </div>
                            <button type="submit" className={styles.loginup}>登录</button>
                        </form>
                        <div className={styles.con_footer}>
                            <a className={styles.xieyi1} href="javascript:;">二维码登录 </a>
                            <span>·</span>
                            <a className={styles.xieyi1} href="javascript:;">海外手机登录</a>
                            <span>·</span>
                            <a className={styles.xieyi1} href="javascript:;">社交账号登陆</a>
                        </div>
                    </div>
                    <div className={styles.login}>
                        <span>没有账号？</span>
                        <a href="javascript:;" className={styles.a}>注册</a>
                    </div>
                </div>
            </div>
        )
    }
}

SignPage = withRouter(SignPage)
export default SignPage