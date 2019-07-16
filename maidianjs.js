
(function(para) {
    window['sensorsDataAnalytic201505'] = para.name;
    window[para.name] = {
        para: para
    };
})({
    name: 'yunxi_sa',
    server_url:'https://www.baidu.com',//后台请求地址
    heatmap: {
        //是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
        clickmap:'default',
        //是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭
        scroll_notice_map:'not_collect',
        //此参数针对预置 $WebClick 事件（包括 quick('trackHeatMap') quick('trackAllHeatMap') 触发的）生效
        // collect_element: function(element_target){
        //     // 如果这个元素有属性sensors-disable=true时候，不采集
        //     if(element_target.getAttribute('sensors-disable') === 'true'){
        //         return false;
        //     }else{
        //         return true;
        //     }
        // },
        // //此参数针对预置 $WebClick 事件（包括 quick('trackHeatMap') quick('trackAllHeatMap') 触发的）生效
        // custom_property:function( element_target ){
        //     //比如您需要给有 data=test 属性的标签的点击事件增加自定义属性 name:'aa' ，则代码如下
        //     if(element_target.getAttribute('data') === 'test'){
        //         return {
        //             name:'aa'
        //         }
        //     }
        // },
        // collect_input:function(element_target){
        //     console.log(element_target, 'element_target')
        //     //例如如果元素的 id 是a，就采集这个元素里的内容
        //     if(element_target.id === 'point'){
        //         return true;
        //     }
        // },
    }
});
