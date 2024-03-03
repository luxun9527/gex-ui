import request from '@/utils/request';

export const login = (data) => {
  return request({
    url: '/account/v1/login',
    method: 'post',
    data,
  })
}


export const getTickerList = (data) => {
  return request({
    url: '/quotes/v1/get_ticker_list',
    method: 'post',
    data,
  })
}

export const createOrder = (data) => {
  return request({
    url: '/order/v1/create_order',
    method: 'post',
    data,
  })
}

export const getSymbolList = (params) => {
  return request({
    url: '/get_symbol_list',
    method: 'get',
    params,
  })
}

export const addCoin = (data) => {
  return request({
    url: '/add_coin',
    method: 'post',
    data,
  })
}

export const updateCoin = (data) => {
  return request({
    url: '/update_coin',
    method: 'post',
    data,
  })
}

export const getErrorCodeList = (params) => {
  return request({
    url: '/get_error_code_list',
    method: 'get',
    params,
  });
}

export const addErrorCode = (data) => {
  return request({
    url: '/add_error_code',
    method: 'post',
    data,
  });
}
export const updateErrorCode = (data) => {
  return request({
    url: '/update_error_code',
    method: 'post',
    data,
  })
}
