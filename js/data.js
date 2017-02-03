/**
 * Created by liusiqian on 17/2/2.
 */
/**
 * 文章结构
 * 以下均为string类型
 * category_name:分类名
 * category_id:类别id
 * article_title:文章名
 * article_id:文章自定义id
 * src_url:链接
 * publish_date:文章发布日期
 */

var _ARTICLE_DIVIDER = ',';
var _article_json = _simpleArticleBuilder('技术','tech','Android实战——GreenDao3.2的使用，爱不释手',
    'android1','http://mp.weixin.qq.com/s/4Nx2DacsK65O5LanPZUszA','2017-01-20') + _ARTICLE_DIVIDER +
    _simpleArticleBuilder('时间管理','time_management','你焦虑，是因为把本该行动的时间用在了思考上',
        'tm1','http://mp.weixin.qq.com/s/IyCHufjlHnJgawEq-x5IKg','2017-01-20') + _ARTICLE_DIVIDER +
    _simpleArticleBuilder('技术','tech','从客户端的角度设计后端的接口',
    'api1','http://mp.weixin.qq.com/s/l0CbwPwUiBzNCoR6SJluZw','2017-01-05');

var _feedback_json = '{"error_code":0,"error_msg":"success!","data":[' + _article_json + ']}';
var articleDatas = JSON.parse(_feedback_json);

function _simpleArticleBuilder(category_name, category_id, article_title, article_id, src_url, publish_date) {
    return '{"category_name":"' + category_name + '",' + '"category_id":"' + category_id + '",' +
        '"article_title":"' + article_title + '",' + '"article_id":"' + article_id + '",' +
        '"src_url":"' + src_url + '",' + '"publish_date":"' + publish_date + '"}';
}

