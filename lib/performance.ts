// Performance monitoring utilities
export const reportWebVitals = (metric: any) => {
  if (metric.label === 'web-vital') {
    console.log(metric); // You can send to analytics here
  }
};

// Prefetch priority pages
export const prefetchPriority = [
  '#pricing',
  '#faq',
  '#problems',
  '#benefits'
];

// Image optimization settings
export const imageConfig = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp'],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
};