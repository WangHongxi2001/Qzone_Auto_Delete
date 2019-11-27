var delay = 500;  //删除与确认操作以500ms为周期循环进行
function del() {
    try {
        document.querySelector('.app_canvas_frame').contentDocument.querySelector('.del_btn').click();
        setTimeout("yes()", delay);
    }
    catch (err) {
        next_page();  //删除本页所有说说后自动翻页
    }
}
function yes() {
    try {
        document.querySelector('.qz_dialog_layer_btn').click();
        setTimeout("del()", delay);
    }
    catch (err) {
        setTimeout("yes()", 1000);
    }
}
function next_page() {
    document.querySelector('.app_canvas_frame').contentWindow.document.querySelectorAll('.mod_pagenav_main>a').forEach(el => {
        if (el.title === '下一页') {
            el.click();
            setTimeout("del()", 5000);
        }
    })
}
del();
