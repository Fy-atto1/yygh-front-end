import request from '@/utils/request'

export default {
    // 医院设置列表
    getHospSetList(current, limit, searchObj) {
        return request({
            url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`, // 模板字符串
            method: 'post',
            data: searchObj // 使用json形式
        })
    },
    // 删除医院设置
    deleteHospSet(id) {
        return request({
            url: `/admin/hosp/hospitalSet/${id}`, // 模板字符串
            method: 'delete'
        })
    },
    // 批量删除医院设置
    batchRemoveHospSet(idList) {
        return request({
            url: `/admin/hosp/hospitalSet/batchRemove`, // 模板字符串
            method: 'delete',
            data: idList
        })
    },
    // 锁定和取消锁定
    lockHospSet(id, status) {
        return request({
            url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`, // 模板字符串
            method: 'put'
        })
    },
    // 添加医院设置
    saveHospSet(hospitalSet) {
        return request({
            url: `/admin/hosp/hospitalSet/saveHospitalSet`, // 模板字符串
            method: 'post',
            data: hospitalSet
        })
    },
    // 医院设置id查询
    getHospSet(id) {
        return request({
            url: `/admin/hosp/hospitalSet/getHospSet/${id}`, // 模板字符串
            method: 'get'
        })
    },
    // 修改医院设置
    updateHospSet(hospitalSet) {
        return request({
            url: `/admin/hosp/hospitalSet/updateHospitalSet`, // 模板字符串
            method: 'post',
            data: hospitalSet
        })
    }
}