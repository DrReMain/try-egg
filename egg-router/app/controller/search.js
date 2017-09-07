'use strict';

module.exports = app => {
  return class SearchController extends app.Controller {
    async index() {
      this.ctx.body = `hello ${this.ctx.query.name}`
    }
  }
};