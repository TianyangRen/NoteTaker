import { ratelimit } from '../config/upstash.js';

const ratelimiter = async (req, res, next) => {
  try {
    const {success} = await ratelimit.limit("my-rate-limit");

    if (!success) { return res.status(429).json({ message: 'Too Many Requests' }); }
       next();

  } catch (error) {
    console.log('Ratelimiter error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  };}


export default ratelimiter;