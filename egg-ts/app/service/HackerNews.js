"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * HackerNews Api Service
 * */
class HackerNews extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    getConfig() {
        return this.app.config.news;
    }
    /**
     * request hacker-news api
     * @param api - Api name
     * @param opts - urllib options
     * */
    async request(api, opts) {
        const options = Object.assign({
            dataType: 'json',
            timeout: ['30s', '30s'],
        }, opts);
        const result = await this.ctx.curl(`${this.getConfig().serverUrl}/${api}`, options);
        return result.data;
    }
    /**
     * get top story ids
     * @param page - page number, 1-ase
     * @param pageSize - page count
     * */
    async getTopStories(page, pageSize) {
        page = page || 1;
        pageSize = pageSize || this.getConfig().pageSize;
        try {
            const result = await this.request('topstories.json', {
                data: {
                    orderBy: '"$key"',
                    startAt: `"${pageSize * (page - 1)}"`,
                    endAt: `"${pageSize * page - 1}"`,
                },
            });
            return Object.keys(result).map((key) => result[key]);
        }
        catch (e) {
            this.ctx.logger.error(e);
            return [];
        }
    }
    /**
     * query item
     * @param id - itemId
     * */
    async getItem(id) {
        return await this.request(`item/${id}.json`);
    }
    /**
     * get user info
     * @param id - userId
     * */
    async getUser(id) {
        return await this.request(`user/${id}.json`);
    }
}
exports.default = HackerNews;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFja2VyTmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhY2tlck5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBb0M7QUFFcEM7O0tBRUs7QUFFTCxnQkFBZ0MsU0FBUSxhQUFPO0lBQzNDLFlBQVksR0FBWTtRQUNwQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O1NBSUs7SUFFRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFhO1FBQzNDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDMUIsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUMxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O1NBSUs7SUFDRSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQWEsRUFBRSxRQUFpQjtRQUN2RCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNqQixRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFFakQsSUFBSSxDQUFDO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUNqRCxJQUFJLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRztvQkFDckMsS0FBSyxFQUFFLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUc7aUJBQ3BDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7U0FHSztJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBVTtRQVczQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztTQUdLO0lBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFVO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDSjtBQTFFRCw2QkEwRUMifQ==