exports.detail = async function (ctx) {
  // this === ctx
  // app === this.app (true)
  ctx.body = `package: ${ctx.params[0]}`
};