const build = process.env.NODE_ENV === 'production';

export const server = build ? 'https://sweet-home-bay.vercel.app/' : 'http://localhost:3000';