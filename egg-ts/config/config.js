'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const defaultConfig_1 = require("./defaultConfig");
module.exports = (appInfo) => {
    const config = {};
    // should change to your own
    config.keys = appInfo.name + '123456';
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.nunj': 'nunjucks',
        },
    };
    return Object.assign({}, config, defaultConfig_1.default);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFHYix1Q0FBb0M7QUFDcEMsbURBQTJDO0FBRTNDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFxQjtJQUNuQyxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFFdkIsNEJBQTRCO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFFdEMsTUFBTSxDQUFDLElBQUksR0FBRztRQUNWLGlCQUFpQixFQUFFLFVBQVU7UUFDN0IsT0FBTyxFQUFFO1lBQ0wsT0FBTyxFQUFFLFVBQVU7U0FDdEI7S0FDSixDQUFDO0lBRUYsTUFBTSxtQkFBSyxNQUFNLEVBQUssdUJBQWEsRUFBRTtBQUN6QyxDQUFDLENBQUMifQ==