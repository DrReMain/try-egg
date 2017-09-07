exports.redirect = async function (ctx) {
  const type = ctx.query.type
  const q = ctx.query.q || 'nodejs'
  if (type === 'bing') {
    this.redirect(`http://cn.bing.com/search?q=${q}`)
  } else {
    ctx.redirect(`https://www.google.co.kr/search?q=${q}`)
  }
};