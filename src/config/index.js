const modeUrlObj = {
    // 生产环境
  'production': {
    baseURL: '192.168.0.1',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: '192.168.0.1',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: '192.168.0.1',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]