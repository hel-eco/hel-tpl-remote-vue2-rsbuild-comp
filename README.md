# 远程vue组件示例

可供`hel-micro`消费的远程vue组件示例

## 本地开发环境调试

```shell
pnpm run start:App
```

业务系统中

```ts
import Vue from "vue";
import {preFetchLib, bindVueRuntime} from "hel-micro";

bindVueRuntime({Vue});

await preFetchLib("hel-tpl-remote-vue-comps", {
    custom: {
        host: 'http://localhost:7001',
        enable: true,
    },
});
```

## 本地调试打包后的产物

```shell
# 本地打包并启动服务
pnpm run server:local
```

业务系统中

```ts
import Vue from "vue";
import {preFetchLib, bindVueRuntime} from "hel-micro";

bindVueRuntime({Vue});

await preFetchLib("hel-tpl-remote-vue-comps", {
    custom: {
        host: 'http://localhost:9001',
        enable: true,
    },
});
```

## 发布远程组件

先修改`package.json`里的`version`字段

```
pnpm run build
pnpm run publish
```
