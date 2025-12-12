import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  env: {
    // Set styled-components to use the fastest way of inserting CSS rules in both dev and production
    SC_DISABLE_SPEEDY: 'false',
  },
}

export default nextConfig
