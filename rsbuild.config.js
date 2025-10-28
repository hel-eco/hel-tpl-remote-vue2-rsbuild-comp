/**
 * @Author: longmo
 * @Date: 2025-10-29 00:01:13
 * @LastEditTime: 2025-10-29 00:27:27
 * @FilePath: rsbuild.config.js
 * @Description: Vue 2 插件仅支持 Vue >= 2.7.0 版本。
 */
import {defineConfig, loadEnv} from '@rsbuild/core';
import {pluginVue2} from '@rsbuild/plugin-vue2';

const {publicVars} = loadEnv({prefixes: ['VUE_APP_']});
export default defineConfig({
    plugins: [pluginVue2()],
    source: {
        // 指定入口文件
        entry: {
            index: './src/main.js',
        },
        define: {
            // 添加全局变量
            ...publicVars
        },
    },
    html: {
        template: './public/index.html',
    },
    server: {
        // 启动端口
        port: 7001,
        cors: true,
    },
    dev:{
        assetPrefix: 'http://localhost:7001/',
        lazyCompilation: true,
    }
});
