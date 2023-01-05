const unoCSS = require('@unocss/webpack').default
const presetUno = require('@unocss/preset-uno').default
const presetAttributify = require('@unocss/preset-attributify').default
const transformerAttributifyJsx = require('@unocss/transformer-attributify-jsx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // * https://webpack.js.org/configuration/cache/
    config.cache = false;
    config.plugins.push(
      unoCSS({ 
        presets: [
          presetUno(),
          presetAttributify(),
        ],
        transformers: [
          transformerAttributifyJsx(),
        ],
        shortcuts: {

        },
      }),
    );
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      };
    };
    return config;
  }
};

module.exports = nextConfig;
