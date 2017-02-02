


/**
 * 移除网页版的文章二维码
 */
function removeQRcode(){
    var elements = document.getElementsByClassName('qr_code_pc');
    if(elements && elements.length === 1){
        var qr_code = elements[0];
        qr_code.style.display = 'none';
    }
}
