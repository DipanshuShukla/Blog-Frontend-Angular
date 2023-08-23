
const HOSTNAME: string = 'localhost'
const PORT_NUMBER: number = 5420
const URL: string = 'http://' + HOSTNAME + ':' + PORT_NUMBER
//const URL: string = 'https://nordic-rose-service.onrender.com'

export const environment = {
    production: false,
    randomBlogAPI: URL + '/blog/random',
    pagedBlogAPI: URL + '/blog/paged',
    tagsAPI: URL + '/tags',

};
