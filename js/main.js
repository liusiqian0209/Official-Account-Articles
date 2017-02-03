var list_container = document.getElementById('article_list');
var frame = document.getElementById('article_frame');


function main() {
    if(articleDatas){
        if(articleDatas.error_code!=null && articleDatas.error_code === 0 && articleDatas.data && articleDatas.data.length > 0){
            var length = articleDatas.data.length;
            for(var i=0; i<length; i++){
                var articleData = articleDatas.data[i];
                if(articleData){
                    //是否已经建立此分类
                    var container = getCategoryContainer(articleData.category_id);
                    if(container == null){
                        container = createCategory(articleData.category_id,articleData.category_name);
                    }
                    addNewArticle(container,articleData.category_id,articleData.article_title,
                        articleData.src_url,articleData.publish_date);
                }
            }
        }
        else{
            if(articleDatas.error_msg){
                alert(articleDatas.error_msg);
            }
            else{
                alert('缺少错误信息!');
            }
        }
    }
    else {
        alert('没有找到数据或数据不合法!');
    }

}

/**
 * 增加一篇文章
 * @param container 分类的div元素
 * @param id
 * @param title
 * @param src
 * @param date
 */
function addNewArticle(container, id, title, src, date) {
    var list_id = 'cate_list_'+container.getAttribute('id');
    var list = document.getElementById(list_id);
    // console.log(list.nodeName);
    if(list!=null && list.nodeName.toLowerCase() === 'ul'){
        var article = document.createElement('li');
        article.setAttribute('id',id);
        article.innerHTML = title;
        article.onclick = function () {
            if(frame){
                frame.src = src;
            }
        };
        var txtdate = document.createElement('span');
        txtdate.innerHTML = date;
        article.appendChild(txtdate);
        list.appendChild(article);
    }
}

/**
 * 创建一个分类
 * 结构为<div> <p></p> <ul> <li>*n </ul> </div>
 * @param id
 * @param name
 * @returns {Element}
 */
function createCategory(id,name) {
    var container = document.createElement('div');
    container.setAttribute('id',id);
    var category_bar = document.createElement('p');
    category_bar.innerHTML = name;
    category_bar.setAttribute('id','cate_bar_'+id);
    container.appendChild(category_bar);
    var article_list = document.createElement('ul');
    article_list.setAttribute('id','cate_list_'+id);
    container.appendChild(article_list);
    list_container.appendChild(container);
    return container;
}

/**
 * 找到Category的Container
 * @param id
 * @returns {Element}
 */
function getCategoryContainer(id) {
    return document.getElementById(id);
}

/**
 * 移除网页版的文章二维码
 */
function removeQRcode(){
    var elements = document.getElementsByClassName('qr_code_pc');
    if(elements!=null && elements.length === 1){
        var qr_code = elements[0];
        qr_code.style.display = 'none';
    }
}
