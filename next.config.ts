import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default function config(phase: string): NextConfig {
  return {
    reactStrictMode: true,
    // `next dev` y `next build` usan carpetas distintas para que un build
    // no rompa un servidor de desarrollo que esté corriendo.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  };
}
