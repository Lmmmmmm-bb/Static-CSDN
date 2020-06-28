window.onload = function() {
    setInterval(move, 4000);
}

var cnt = 2;
var tmp = document.getElementsByTagName('img');
var arr = [4, 5, 6, 7];
function move() {
    tmp[arr[0]].className = 'bannerImg1';
    tmp[arr[1]].className = 'bannerImg2';
    tmp[arr[2]].className = 'bannerImg3';
    tmp[arr[3]].className = 'bannerImg4';

    var p = arr[0];
    for (var i = 0; i < 3; i++)
        arr[i] = arr[i + 1];
    arr[3] = p;
}

// 图片轮播
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        // 根据步长函数求出移动的步长
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}



// 搜索框历史记录
function showHistory() {
    document.getElementById('history').style.display = 'block';
}
function hideHistory() {
    document.getElementById('history').style.display = 'none';
}
// 文章点赞部分
var has = new Boolean(20);
function isGood(id, i, j) {
    var cur = document.getElementById(id).innerText;
    if (!has[i]) {
        document.getElementById(j).style.color = '#ca0c16'
        document.getElementById(id).innerText = parseInt(cur) + 1;
        has[i] = true;
    } else {
        document.getElementById(j).style.color = '#3d3d3d'
        document.getElementById(id).innerText = parseInt(cur) - 1;
        has[i] = false;
    }
}
function del(id) {
    var toDel = document.getElementById(id);
    var parent = toDel.parentElement.parentElement.parentElement;
    var p = toDel.parentElement.parentElement;
    var removed = parent.removeChild(p);
}

// MarkDown 部分
function Editor(input, preview) {
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
  }
var $ = function (id) { return document.getElementById(id); };
new Editor($("text-input"), $("preview"));


function follow(now) {
    var spanCnt = document.getElementsByClassName('right')[0];
    if (now.innerText == '关注') {
        now.innerText = '取消关注';
        now.style.color = '#999';
        now.style.border = '1px solid #999';
        spanCnt.innerText = "共" + ++cnt + "人";
        pop("关注成功");
    } else {
        now.innerText = '关注';
        now.style.color = '#ca0c16';
        now.style.border = '1px solid #ca0c16';
        spanCnt.innerText = "共" + --cnt + "人";
        pop("取消成功");
    }
}

function pop(text) {
    var div = document.getElementsByClassName('pop')[0];
    div.innerText = text;
    div.style.top = 50 + 'px';
    div.style.opacity = "1";

    setTimeout(
        function() {
            div.style.top = 10 + 'px';
            div.style.opacity = '0';
        },
        1200
    );
}

