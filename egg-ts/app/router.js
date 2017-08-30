'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    const controller = app.controller;
    app.redirect('/', 'news');
    app.get('/news', controller.news.list);
    // app.get('/news/item/:id', controller.news.detail);
    // app.get('/news/user/:id', controller.news.user);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFJYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBZ0I7SUFFOUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUVsQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUxQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLHFEQUFxRDtJQUNyRCxtREFBbUQ7QUFDdkQsQ0FBQyxDQUFDIn0=