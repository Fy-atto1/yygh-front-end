import request from '@/utils/request'

export default {
    // 医院列表
    getHospList(page, limit, searchObj) {
        return request({
            url: `/admin/hosp/hospital/list/${page}/${limit}`, // 模板字符串
            method: 'get',
            params: searchObj
        })
    },
    // 根据dictCode查询所有子节点（所有省）
    findByDictCode(dictCode) {
        return request({
            url: `/admin/cmn/dict/findByDictCode/${dictCode}`, // 模板字符串
            method: 'get'
        })
    },
    // 根据数据id查询子数据列表
    findChildId(id) {
        return request({
            url: `/admin/cmn/dict/findChildData/${id}`, // 模板字符串
            method: 'get'
        })
    },
    // 更新医院上线状态
    updateStatus(id, status) {
        return request({
            url: `/admin/hosp/hospital/updateHospStatus/${id}/${status}`, // 模板字符串
            method: 'get'
        })
    },
    // 查看医院详情
    getHospById(id) {
        return request({
            url: `/admin/hosp/hospital/showHospDetail/${id}`, // 模板字符串
            method: 'get'
        })
    },
    // 查看医院科室
    getDeptByHoscode(hoscode) {
        return request({
            url: `/admin/hosp/department/getDeptList/${hoscode}`, // 模板字符串
            method: 'get'
        })
    },
    // 查询预约规则
    getScheduleRule(page, limit, hoscode, depcode) {
        return request({
            url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method: 'get'
        })
    },
    //查询排班详情
    getScheduleDetail(hoscode, depcode, workDate) {
        return request({
            url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
            method: 'get'
        })
    }
}