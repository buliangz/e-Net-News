
//创建一个数组，里面放数据
let arr = ['各地扎实做好迎接党的二十大宣传工作','广西深入开展“喜迎二十大、永远跟党走、奋进新征程”主题教育实践','党的二十大代表怎么选？中央发文明确','严格资格条件 坚持好中选优——各级党组织和党员积极开展','“喜迎二十大、永远跟党走、奋进新征程”广西共青团有关工作新闻发布会','【强国复兴有我】喜迎二十大，答题涨知识！','Github官网','站点在线地址'];
// 获取输入框
let input = document.getElementById('val');
// 获取由于div组成的搜索框内容区域
let show = document.getElementById('show');
// 当释放键盘按钮时执行
let ind;
input.onkeyup = function(){
    // 改变搜索框内容的display属性，来显示内容
    show.style.display = 'block';
    // input.value 和 arr的每一项进行匹配 indexOf() 匹配不到返回-1
    let str = '';
    arr.forEach((item)=>{
        let res = item.indexOf(input.value);
        if(res != -1){
            str += '<p>'+item+'</p>';
            ind=res;
        }
    })
    // 如果没有内容就显示没有结果
    if(!input.value || !str){
        show.innerHTML = '<p>暂无结果</p>'
    }else{
        show.innerHTML = str;
    }
}

// 当用户离开input输入框时执行,失去焦点，清除搜索框内容
input.onblur = function(){
    show.style.display = 'none';
    input.value = '';
}

    