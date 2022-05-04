import React, { lazy, Suspense } from 'react';

const LazyAboutUs = lazy(() => import('./AboutUs'));

const AboutUs = props => (
  <Suspense fallback={null}>
    <LazyAboutUs {...props} />
  </Suspense>
);

export default AboutUs;
