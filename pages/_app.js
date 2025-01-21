import "../assets/css/globals.css";
// import "assets/css/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../redux/storeConfig/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import DynamicHead from "components/dynamicHead";
import LoaderLayout from "layout/loaderlayout";
import { useRouter } from "next/router";
import Footer from "components/footer";
import Navbar from "components/navbar";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    if (router?.pathname.includes("dashboard")) {
      const token = localStorage.getItem("accessToken");
      if (token == null) {
        router.push("/");
      }
    }
  }, [router]);

  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeLayout = ["/ads-two/[id]", "/ads/[id]", "/ads/thank-you"];

  useEffect(() => {
    scrollToTop();
  });

  useEffect(() => {
    document.documentElement.lang = "en-IN";
  }, []);

  console.log("test---123#");

  return (
    <div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N78CGTH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div className="font-poppins">
        <Provider store={store}>
          <LoaderLayout loading={loading}>
            <DynamicHead scritpChat={removeLayout.includes(router?.pathname)} />
            {!removeLayout.includes(router?.pathname) ? (
              <>
                <Navbar />
              </>
            ) : null}
            <Component {...pageProps} />
            <ToastContainer />
            {!removeLayout.includes(router?.pathname) ? <Footer /> : null}
          </LoaderLayout>
        </Provider>
      </div>
    </div>
  );
}

export default MyApp;
