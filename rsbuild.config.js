/**
 * @Author: longmo
 * @Date: 2025-10-29 00:01:13
 * @LastEditTime: 2025-10-29 00:27:27
 * @FilePath: rsbuild.config.js
 * @Description: Vue 2 插件仅支持 Vue >= 2.7.0 版本。
 */
import {defineConfig, loadEnv} from '@rsbuild/core';
import {pluginVue2} from '@rsbuild/plugin-vue2';

const appInfo = require('./appInfo.js');

const {publicVars} = loadEnv({prefixes: ['VUE_APP_']});

const devPort = 7001
const publicPath = process.env.NODE_ENV === 'development' ? `http://localhost:${devPort}/` : appInfo.getPublicPathOrUrl();

console.log('publicPath:', publicPath)
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
    output: {
        // 输出目录
        distPath: {
            root: 'hel_dist',
        },
        assetPrefix: publicPath,
    },
    server: {
        // 启动端口
        port: devPort,
        cors: true,
    },
    dev: {
        assetPrefix: publicPath,
        lazyCompilation: false, // 若使用了懒加载组件，必须开发环境关闭此配置，否则报错Failed to resolve async component: async () => await
    }
});
