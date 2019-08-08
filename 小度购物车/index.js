var bot = document.querySelector('.bottom')


var data = [
    {
        price: 199,
        num: 1,
        isChecked: true,
        introduce: '小度人工智障音箱1S WIFI/蓝牙音箱，万能红外遥控器，语音通话'
    },
    {
        price: 188,
        num: 1,
        isChecked: false,
        introduce: '小度人工智障音箱1S WIFI/蓝牙音箱，万能红外遥控器，语音通话'
    },
    {
        price: 129,
        num: 1,
        isChecked: true,
        introduce: '小度人工智障音箱1S WIFI/蓝牙音箱，万能红外遥控器，语音通话'
    }
]


function initView() {
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += `
            <div class="list">
            <lable><input type="checkbox" ${data[i].isChecked ? 'checked' : ''}></lable>
            <dl>
                <dt></dt>
                <dd>
                    <span>${data[i].introduce}</span>
                    <em>黑色</em>
                </dd>
            </dl>
            <ul>
                <li>￥ ${data[i].price}</li>
                <li>
                    <span class="minus">-</span>
                    <span id="num">${data[i].num}</span>
                    <span class="add">+</span>
                </li>
                <li>￥<i id="subtotal">${data[i].price * data[i].num}</i></li>
                <li>删除</li>
            </ul>
        </div>`
    }

    bot.innerHTML = html
}
initView()


var allPri = document.querySelector('.all-price');
var allChecks = document.querySelector('.all-checks')
var add = document.querySelectorAll('.add');
var minus = document.querySelectorAll('.minus');
var subNum = document.querySelector('.subNum')
var allNum = document.querySelector('.allNum')
var checkboxs = bot.querySelectorAll('input[type=checkbox]')


for (var i = 0; i < add.length; i++) {
    (function (idx) {
        var val = data[idx].num

        add[idx].onclick = function () {
            val++;
            sub(idx, val)
            allPrice()
        };

        minus[idx].onclick = function () {
            val = val - 1 <= 0 ? 0 : val - 1;
            sub(idx, val)
            allPrice()
        };

        checkboxs[idx].onclick = function () {
            data[idx].isChecked = checkboxs[idx].checked;
            allPrice()
        }
    })(i);
};

allChecks.onclick = function() {
    var bool = allChecks.checked;
    for(var i = 0; i < checkboxs.length; i++) {
        checkboxs[i].checked = bool;
    }
}

allNum.innerHTML = data.length;


function sub(index, val) {

    num[index].innerText = val;
    data[index].num = val
    subtotal[index].innerText = data[index].price * data[index].num;

}

function allPrice() {
    var allPrice = 0;
    var allNumber = 0;

    data.forEach(function (item) {
        if (item.isChecked) {
            allPrice += item.price * item.num;
            allNumber += item.num
        }
        subNum.innerHTML = allNumber;
        allPri.innerHTML = allPrice;
    })
}









let a = data.every(function(item) {
    return console.log(item)
})

console.log(a)






