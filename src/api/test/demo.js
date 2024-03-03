import request from '@/utils/request';

export default {
    time() {
        return request({
            url: '/api/test/time',
            method: 'get',
        });
    },
};