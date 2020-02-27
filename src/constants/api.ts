const BASE_URL = 'http://localhost:5000/fetch?url='

module.exports = {
  CENTERPIECE_API: `${BASE_URL}http://www.thedp.com/section/centerpiece.json`,
  TOP_ARTICLES_API: `${BASE_URL}http://www.thedp.com/section/top.json`,
  MOST_READ_DP_API: `${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/DP`,
  MOST_READ_34_API: `${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/34ST`,
  MOST_READ_UTB_API: `${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/UTB`,
  SECTION_API: (slug: string) => `${BASE_URL}https://www.thedp.com/section/${slug}.json`,
  STAFF_API: (slug: string) => `${BASE_URL}https://www.thedp.com/staff/${slug}.json`
}
