/**
 *
 * Asynchronously loads the component for ImprovedPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ImprovedPage = lazyLoad(
  () => import('./index'),
  module => module.ImprovedPage,
);
