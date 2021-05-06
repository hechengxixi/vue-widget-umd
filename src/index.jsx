/* eslint-disable no-throw-literal */
import React from 'react';
import * as CPONS from './components'
const {NoAuth} = CPONS;
const XnUI = {};

const handleErr = (err) => {
    if (typeof err === 'string')
        console.error(err)
    else
        console.error(`xn-${err.type || ''}Error: ${err.msg}`)
}


XnUI.registerComponentUrl = (url) => {
    if (window.registerComponentUrl) {
        // 全局添加 auth
        // eslint-disable-next-line no-undef
        return registerComponentUrl(url).catch(() => { 
            handleErr({ type: 'AuthError', msg: '请检查服务与密钥！!' });
            throw Error();
        })
    } else {
        handleErr({ type: 'Global', msg: '未引入presets!' })
    }
    return Promise.reject();
}
XnUI.install = (app, options) => {
    try {
        if (!window.AUTH_MAP) throw { type: 'Global', msg: '未获取权限！' }

        // eslint-disable-next-line array-callback-return
        Object.keys(CPONS).map(cponName => {
            console.log(cponName);
            // 本地调试添加
            window.AUTH_MAP[cponName]={
                get: true,
                post: true,
                put: true,
                delete: true
            }
            if (!window.checkComponentAuth) throw { type: 'Global', msg: '未引入presets!' }
            // eslint-disable-next-line no-undef
            if (checkComponentAuth(cponName))
                CPONS[cponName] && (XnUI[cponName] = CPONS[cponName]);
            else {
                // 如果没有权限，不管使用了没，注册的时候会全部报错
                // console.error(`xn-AuthError: 该密钥没有 ${cponName} 权限`)
                // 如果组件没有权限 统一显示 NoAuth 组件
                CPONS[cponName] && (XnUI[cponName] = function NoAuthHOC(){return (<NoAuth cponname={cponName} />)});
            }
        })

    } catch (err) {
        handleErr(err)
    }
}
// 需要加载权限，不能 auto install
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// }
export default XnUI;

