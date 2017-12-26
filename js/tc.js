function Dialog() {
    this.oBox = null;
    this.oMark = null;
    this.oClose = null;
    this.title = null;
    // 默认参数
    this.settings = {
        title: '我是标题',
        content: '我是一条咸鱼！',
        drag: false,
        mark: true
    };
}

Dialog.prototype.init = function(opt) {
    // 配置参数覆盖默认参数
    extend(this.settings, opt);
    this.create();
    this.closeFn();
}


Dialog.prototype.create = function() {
    // 窗体
    this.oBox = document.createElement('div');
    this.oBox.className = 'box';
    this.oBox.innerHTML = '<div class="title">' +
        '<span class="close">X</span>' +
        '<h3>' + this.settings.title + '</h3>' +
        '</div>' +
        '<div class="content">' + this.settings.content + '<img src="img/1.jpeg" alt="">' + '</div>';
    document.body.appendChild(this.oBox);
    this.oClose = this.oBox.getElementsByClassName('close')[0];


    // 遮罩，判断是否要创建
    if (this.settings.mark) {
        this.oMark = document.createElement('div');
        this.oMark.className = 'mark';
        document.body.appendChild(this.oMark);
    }

}

// 删除
Dialog.prototype.closeFn = function() {
    var _this = this;
    this.oClose.onclick = function() {
        document.body.removeChild(_this.oBox);
        if (_this.settings.mark) {
            document.body.removeChild(_this.oMark);
        }
        clearTimeout(_this.timer);
    }
}