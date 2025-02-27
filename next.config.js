/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: [
      "",
      "storage.googleapis.com",
      "images.pexels.com",
      "pexels.com",
      "pos2.flashdeal.in",
      "ik.imagekit.io",
    ],
  },
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  swcMinify: true,
  async redirects() {
    return [
      // {
      //   source: "/old-blog/:slug",
      //   destination: "/new-blog/:slug",
      //   permanent: true,
      // },

      {
        source: "/aboutus/brand",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/aboutus/our-team",
        destination: "/about/our-team",
        permanent: true,
      },
      {
        source: "/aboutus/quality-assurance",
        destination: "/about/quality-assurance",
        permanent: true,
      },
      {
        source: "/aboutus/csr",
        destination: "/about/csr",
        permanent: true,
      },
      {
        source: "/aboutus/awards-and-accreditations",
        destination: "/about/awards-accreditations",
        permanent: true,
      },
     
      {
        source: "/covid/covid19-rt-pcr",
        destination: "/covid-19-pcr-h2",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/biowaste",
        destination: "/biomedical-waste",
        permanent: true,
      },
      {
        source: "/research-and-trials",
        destination: "/clinical-research",
        permanent: true,
      },
      {
        source: "/find-tests",
        destination: "/book-a-test",
        permanent: true,
      },
      {
        source: "/homevisit",
        destination: "/free-home-sample-collection",
        permanent: true,
      },
      // {
      //   source: "/aboutus/awards-and-accreditations",
      //   destination: "/about/awards-accreditations",
      //   permanent: true,
      // },
      // https://www.cityxrayclinic.com
    ];
  },
};

module.exports = nextConfig;
