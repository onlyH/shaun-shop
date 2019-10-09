import myUtil from "../util/mm";
const _mm = new myUtil()

class Statistic {
    //首页数据
    getHomeCount() {
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}
export default Statistic