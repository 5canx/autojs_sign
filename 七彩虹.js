let OCRFindCoord = require('/sdcard/脚本/zhuabao/识图点字.js');
function qcx(){
    toast("--开始签到--")
    click(955, 2230);
    sleep(2000);
    sign = OCRFindCoord(583, 424, 234, 71, "每日签到");
    click(sign[0], sign[1]);
    toast("--签到成功--");
    click(104, 2230); //返回首页
    sleep(2000);
    click(234, 1067); //首页最新
    swipe(device.width / 2, device.height * 0.8,device.width / 2, device.height * 0.5, 600);
    sleep(2000);
    for (let i = 1 ; i < 6; i++) {
        click(504, 671);
        sleep(3000);
        click(730, 2260);//点赞按钮
        back();
        sleep(3000);
        swipe(device.width / 2, device.height * 0.8,device.width / 2, device.height * 0.4, 600);
        sleep(3000);
    }


}

module.exports = qcx;