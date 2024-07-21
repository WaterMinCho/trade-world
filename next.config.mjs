import withEsbuild from "esbuild-plugin-babel-next";
/** @type {import('next').NextConfig} */

// Use:
export default withEsbuild({
  esbuild: {
    // esbuild 옵션
    loader: "tsx", // TypeScript 및 JSX 지원
    target: "es2015", // 대상 ECMAScript 버전
    minify: true, // 프로덕션 빌드시 코드 최소화
    drop_annotations: true, // 주석 제거
    dro_debugger: true, // 디버거 문 제거
  },
  // 기타 Next.js 옵션
  webpack: (config, { dev, isServer }) => {
    // 추가적인 webpack 설정
    return config;
  },
});
