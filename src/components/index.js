/*
|--------------------------------------------------------------------------
|
| 这些组件暴露给使用方
|
|--------------------------------------------------------------------------
*/
import App from './App.vue';
import HelloWorld from './HelloWorld.vue';

const LazyLoadComp = () => import('./LazyLoadComp.vue');
export default {
    App,
    HelloWorld,
    LazyLoadComp
};
