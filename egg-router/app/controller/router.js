'use strict';

module.exports = app => {
  return class RouterController extends app.Controller {
    async user(ctx) {
      // this => RouterController
      // this.app
      // this.ctx
      // this.ctx.app === this.app  (true)
      ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`
    }
  }
};