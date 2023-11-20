
const HOSTNAME: string = 'localhost'
const PORT_NUMBER: number = 5420
const URL: string = 'http://' + HOSTNAME + ':' + PORT_NUMBER
// const URL: string = 'https://nordicrosebackend.dipanshushukla.com'

export const environment = {
    production: false,
    randomBlogAPI: URL + '/blog/random',
    pagedBlogAPI: URL + '/blog/paged',
    tagsAPI: URL + '/tags',
    blogAPI: URL + '/blog',
    newsletterAPI: URL + '/newsletter',
};
