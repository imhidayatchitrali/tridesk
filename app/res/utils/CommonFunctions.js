const { removeTokenFromCookie } = require("./cookieUtils")

export  const exit_session = ()=>{
    removeTokenFromCookie()
    window.location.reload()
}