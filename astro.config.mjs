// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://gardsaebbe.github.io',
  base: '/website2.0',
});
