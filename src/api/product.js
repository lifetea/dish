import request from '../utils/request'
const baseUrlApi = 'https://api.wq1516.com'
const ossUrl = 'https://oss.wq1516.com/'
// const baseUrlDyn = 'https://dyn.ithome.com'
// const baseUrlQuan = 'https://apiquan.ithome.com'

const product = {
  ossUrl: ossUrl,
  getCategory: () => request.get('goodsType/all?business_id=1', null, {
    baseURL: baseUrlApi
  }),
  getProduct: ({pageNum = 2, pageSize = 2, categoryId = null, name = ''}) => request.get('goods/all', {
    business_id: 1,
    pageNum: pageNum,
    pageSize: pageSize,
    type: categoryId,
    name: name
  }, {
    baseURL: baseUrlApi
  })
  // getNews: (id) => request.get(`/xml/newscontent/${id}.xml`, null, {
  //   baseURL: baseUrlApi
  // }),
  // getRelatedNews: (id) => request.get(`/json/tags/0${id.slice(0, 3)}/${id}.json`, null, {
  //   baseURL: baseUrlApi,
  //   parseJson: false
  // }),
  // getNewsComments: (id) => request.get(`/json/commentlist/350/87a8e5b144d81938.json`, null, {
  //   baseURL: baseUrlDyn
  // }),
  // getSlides: () => request.get('/xml/slide/slide.xml', null, {
  //   baseURL: baseUrlApi
  // }),
  // getTopics: (r) => request.get('/api/post', {
  //   categoryid: 0,
  //   type: 0,
  //   orderTime: r,
  //   visistCount: '',
  //   pageLength: ''
  // }, {
  //   baseURL: baseUrlQuan
  // }),
  // getTopic: (id) => request.get(`/api/post/${id}`, null, {
  //   baseURL: baseUrlQuan
  // }),
  // getTopicComments: (id, last) => request.get('/api/reply', {
  //   postid: id,
  //   replyidlessthan: last
  // }, {
  //   baseURL: baseUrlQuan
  // })
}

export default product
