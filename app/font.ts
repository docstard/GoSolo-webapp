// app/fonts.ts or app/layout.tsx
import LocalFont from 'next/font/local';

export const clashDisplay = LocalFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add other weights as needed
  ],
  variable: '--font-clash-display', // Define a CSS variable name
  display: 'swap', // Use 'swap' or 'optional' for font-display behavior
});
