import { environment as common } from "./environment.development";

const URL: string = 'https://nordic-rose-service.onrender.com'
export const environment = {
    production: true,
    randomBlogAPI: URL + '/blog/random',
    pagedBlogAPI: URL + '/blog/paged',
    tagsAPI: URL + '/tags',
    blogAPI: URL + '/blog',
    newsletterAPI: URL + '/newsletter',
};
