/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: [
      "www.cityxrayclinic.in",
      "storage.googleapis.com",
      "images.pexels.com",
      "pexels.com",
      "https://pos2.flashdeal.in/kaivee-blog/",
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
      // {
      //   source: "/aboutus/awards-and-accreditations/:slug(.)",
      //   destination: "/about/accreditation/:slug",
      //   permanent: true,
      // },
      {
        source: "/blog/pneumonia-type-symptoms-causes.aspx",
        destination:
          "https://pos2.flashdeal.in/kaivee-blog/pneumonia-type-symptoms-causes",
        permanent: false,
      },
      {
        source: "/blog/blood-cancer-symptoms-type-causes-and-test.aspx",
        destination:
          "https://pos2.flashdeal.in/kaivee-blog/blood-cancer-symptoms-type-causes-and-test",
        permanent: false,
      },
      {
        source: "/blog/asthma-types-causes-symptoms-tests.aspx",
        destination:
          "https://pos2.flashdeal.in/kaivee-blog/asthma-types-causes-symptoms-tests",
        permanent: false,
      },
      {
        source: "/blog/symptoms-of-gestational-diabetes-in-pregnancy.aspx",
        destination:
          "https://pos2.flashdeal.in/kaivee-blog/symptoms-of-gestational-diabetes-in-pregnancy",
        permanent: false,
      },
      {
        source: "/blog/symptoms-of-conjunctivitis-viral-pink-eye-flu.aspx",
        destination:
          "https://pos2.flashdeal.in/kaivee-blog/symptoms-of-conjunctivitis-viral-pink-eye-flu",
        permanent: false,
      },
      {
        source: "/blog/what-is-dehydration-symptoms-causes.aspx",
        destination:
          "https://pos2.flashdeal.in/kaivee-blog/what-is-dehydration-symptoms-causes",
        permanent: false,
      },
      {
        source: "/blog/chikungunya-fever.aspx",
        destination: "https://pos2.flashdeal.in/kaivee-blog/chikungunya-fever",
        permanent: false,
      },
      {
        source: "/blog/malaria-fever-symptoms.aspx",
        destination: "https://pos2.flashdeal.in/kaivee-blog/malaria-fever-symptoms",
        permanent: false,
      },
      {
        source: "/blog/common-monsoon-diseases.aspx",
        destination: "https://pos2.flashdeal.in/kaivee-blog/common-monsoon-diseases",
        permanent: false,
      },
      {
        source: "/blog/all-about-diabetes.aspx",
        destination: "https://blog.cityxrayclinic.com/all-about-diabetes",
        permanent: false,
      },
      {
        source: "/blog/lotus-seeds-benefits.aspx",
        destination: "https://blog.cityxrayclinic.com/lotus-seeds-benefits",
        permanent: false,
      },
      {
        source: "/blog/what-is-typhoid-symptoms-causes-treatment.aspx",
        destination:
          "https://blog.cityxrayclinic.com/what-is-typhoid-symptoms-causes-treatment",
        permanent: false,
      },
      {
        source: "/blog/viral-fever-symptoms-causes-treatment.aspx",
        destination:
          "https://blog.cityxrayclinic.com/viral-fever-symptoms-causes-treatment",
        permanent: false,
      },
      {
        source: "/blog/know-all-about-dengue-fever.aspx",
        destination:
          "https://blog.cityxrayclinic.com/know-all-about-dengue-fever",
        permanent: false,
      },
      {
        source: "/aboutus/awards-and-accreditation/nabl-certificate.aspx",
        destination: "/about/accreditation/nabl-certificate",
        permanent: true,
      },
      {
        source:
          "/aboutus/awards-and-accreditation/national-healthcare-awards-2022.aspx",
        destination: "/about/award/national-healthcare-awards-2022",
        permanent: true,
      },
      {
        source:
          "/aboutus/awards-and-accreditation/honour-of-dr-lal-singh-expertise.aspx",
        destination: "/about/award/honour-of-dr-lal-singh-expertise",
        permanent: true,
      },
      {
        source:
          "/aboutus/awards-and-accreditation/international-healthcare-award-2022.aspx",
        destination: "/about/award/international-healthcare-award-2022",
        permanent: true,
      },
      {
        source:
          "/aboutus/awards-and-accreditation/health-care-excellence-awards-2018.aspx",
        destination: "/about/award/health-care-excellence-awards-2018",
        permanent: true,
      },
      {
        source: "/aboutus/awards-and-accreditation/delhi-city-icon-award.aspx",
        destination: "/about/award/delhi-city-icon-award",
        permanent: true,
      },
      {
        source: "/aboutus/awards-and-accreditation/certificate-of-excellence",
        destination: "/about/award/certificate-of-excellence",
        permanent: true,
      },
      {
        source: "/aboutus/awards-and-accreditation/certificate-of-recognition",
        destination:
          "https://www.cityxrayclinic.com/about/award/certificate-of-recognition",
        permanent: true,
      },
      {
        source: "/services/mri-scan.aspx",
        destination: "/facilities/mri-scan-price-in-delhi",
        permanent: true,
      },
      {
        source: "/services/1-5-tesla-mri.aspx",
        destination: "/facilities/mri-1-5-tesla-price",
        permanent: true,
      },
      {
        source: "/services/3-tesla-mri.aspx",
        destination: "/facilities/3-tesla-mri-price",
        permanent: true,
      },
      {
        source: "/services/ct-scan.aspx",
        destination: "/facilities/ct-scan-price-delhi",
        permanent: true,
      },
      {
        source: "/services/digital-x-ray.aspx",
        destination: "/facilities/digital-x-ray-price",
        permanent: true,
      },
      {
        source: "/services/neurology.aspx",
        destination: "/facilities/neurology-test-price-delhi",
        permanent: true,
      },
      {
        source: "/services/eeg.aspx",
        destination: "/facilities/eeg-test-price",
        permanent: true,
      },
      {
        source: "/services/ncv.aspx",
        destination: "/facilities/ncv-test-price",
        permanent: true,
      },
      {
        source: "/services/emg.aspx",
        destination: "/facilities/emg-test-cost",
        permanent: true,
      },
      {
        source: "/services/bera.aspx",
        destination: "/facilities/bera-test-price-in-delhi",
        permanent: true,
      },
      {
        source: "/services/ver-vep.aspx",
        destination: "/facilities/ver-vep-test-price",
        permanent: true,
      },
      {
        source: "/services/dental-imaging.aspx",
        destination: "/facilities/dental-x-ray-near-me",
        permanent: true,
      },
      {
        source: "/services/cbct.aspx",
        destination: "/facilities/cbct-scan-price",
        permanent: true,
      },
      {
        source: "/services/opg.aspx",
        destination: "/facilities/opg-x-ray-cost",
        permanent: true,
      },
      {
        source: "/services/cardiology.aspx",
        destination: "/facilities/cardiology-test-price",
        permanent: true,
      },
      {
        source: "/services/ecg.aspx",
        destination: "/facilities/ecg-test-price-delhi",
        permanent: true,
      },
      {
        source: "/services/2d-echo.aspx",
        destination: "/facilities/2d-echo-test-near-me",
        permanent: true,
      },
      {
        source: "/services/tmt.aspx",
        destination: "/facilities/tmt-test-price-delhi",
        permanent: true,
      },
      {
        source: "/services/pft.aspx",
        destination: "/facilities/pft-test-cost-delhi",
        permanent: true,
      },
      {
        source: "/facilities/holter.aspx",
        destination: "/facilities/holter-monitor-test-cost",
        permanent: true,
      },
      {
        source: "/services/nuclear-imaging.aspx",
        destination: "/facilities/nuclear-scan-cost-in-delhi",
        permanent: true,
      },
      {
        source: "/services/dtpa.aspx",
        destination: "/facilities/dtpa-scan-price-delhi",
        permanent: true,
      },
      {
        source: "/services/dmsa.aspx",
        destination: "/facilities/dmsa-scan-price-delhi",
        permanent: true,
      },
      {
        source: "/services/hida.aspx",
        destination: "/facilities/hida-scan-near-me",
        permanent: true,
      },
      {
        source: "/services/bone.aspx",
        destination: "/facilities/bone-scan-test-price",
        permanent: true,
      },
      {
        source: "/services/thyroid-scan.aspx",
        destination: "/facilities/nuclear-thyroid-scan-price",
        permanent: true,
      },
      {
        source: "/services/gibleed.aspx",
        destination: "/facilities/nuclear-lower-upper-gi-bleed-scan",
        permanent: true,
      },
      {
        source: "/services/stress-thallium.aspx",
        destination: "/facilities/nuclear-stress-thallium-test-price",
        permanent: true,
      },
      {
        source: "/services/parathyroid.aspx",
        destination: "/facilities/parathyroid-scan-cost",
        permanent: true,
      },
      {
        source: "/services/dexa-bmd.aspx",
        destination: "/facilities/dexa-bmd-test-price",
        permanent: true,
      },
      {
        source: "/services/digital-mammography.aspx",
        destination: "/facilities/mammography-test-price-delhi",
        permanent: true,
      },
      {
        source: "/services/pathology-laboratory.aspx",
        destination: "/facilities/best-pathology-lab-in-delhi",
        permanent: true,
      },
      {
        source: "/services/3d-4d-ultrasound.aspx",
        destination: "/facilities/3d-4d-ultrasound-near-me",
        permanent: true,
      },
      {
        source: "/services/colour-doppler.aspx",
        destination: "/facilities/usg-colour-doppler-price",
        permanent: true,
      },
      {
        source: "/services/penile-doppler.aspx",
        destination: "/facilities/penile-doppler-test-price",
        permanent: true,
      },
      {
        source: "/services/ct-coronary-angiography.aspx",
        destination: "/facilities/ct-coronary-angiography-price",
        permanent: true,
      },
      {
        source: "/health-packages/city-advanced-health-package.aspx",
        destination: "/health-packages/city-advanced-health-packages",
        permanent: true,
      },
      {
        source: "/health-packages/city-affordable-care-package.aspx",
        destination: "/health-packages/city-affordable-care-package",
        permanent: true,
      },
      {
        source: "/health-packages/city-extended-health-package.aspx",
        destination: "/health-packages/city-extended-health-package",
        permanent: true,
      },
      {
        source: "/health-packages/city-wellness-package.aspx",
        destination: "/health-packages/city-wellness-package",
        permanent: true,
      },
      {
        source: "/health-packages/neo-wellness-health-checkup.aspx",
        destination: "/health-packages/neo-wellness-health-checkup",
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
