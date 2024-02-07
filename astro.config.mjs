import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv('', process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    apiOptions: {
      region: ''
    },
    bridge: {
      customParent: 'https://app.storyblok.com'
    },
    components: {
      page: 'storyblok/Page',
      scrollSection: 'storyblok/ScrollSection',
      hero: 'storyblok/Hero',
      textBlock: 'storyblok/TextBlock',
      text: 'storyblok/Text',
      grid: 'storyblok/Grid',
      gridCategory: 'storyblok/GridCategory',
      gridItem: 'storyblok/GridItem',
      gridGallery: 'storyblok/GridGallery',
      carousel: 'storyblok/Carousel',
      row: 'storyblok/Row',
      container: 'storyblok/Container',
      empty: 'storyblok/Empty',
      image: 'storyblok/Image',
      signature: 'storyblok/Signature',
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: vercel()
});