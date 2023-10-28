/** @type {import('next').NextConfig} */


const {withContentlayer} = require("next-contentlayer");

const nextConfig = {

    compiler:{
        removeConsole:true,
        output: 'export',
        images: { unoptimized: true },
        
    }
};

module.exports = withContentlayer({ ...nextConfig });
