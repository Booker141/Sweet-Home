module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      /* config options here */
      /*Internacionalización - Cambio de idiomas*/
      
      i18n:{
        locales: ["es-ES" , "en"],
        defaultLocale: "es-ES"
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            
          },
        ],
      },
      
    }
    
    return nextConfig
  }