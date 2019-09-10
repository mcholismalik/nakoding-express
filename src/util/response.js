export default {
  success(message, res, data = {}) {
    res.status(200).json({
      success: true,
      flag: 'SUCCESS',
      message,
      result: data
    })
  },
  internalServerError(messages, res, flag = '') {
    res.status(500).json({
      success: false,
      flag,
      messages
    })
  },
  notFound(message, res, flag = '') {
    res.status(404).json({
      success: false,
      flag,
      message
    })
  },
  badRequest(message, res, flag = '') {
    res.status(400).json({
      success: false,
      flag,
      message
    })
  },
  unAuthorized(message, res, flag = '') {
    res.status(401).json({
      success: false,
      flag,
      message
    })
  },
  forbidden(message, res, flag = '') {
    res.status(403).json({
      success: false,
      flag,
      message
    })
  },
  conflict(message, res, flag = '') {
    res.status(409).json({
      success: false,
      flag,
      message
    })
  }
}
