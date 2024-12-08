import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import {Provider} from "react-redux";

import {store} from "../store";

import "../css/global.css";
import MetaTags from "../components/MetaTags";

function App({Component, pageProps}: AppProps) {
  const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
      return process.env.NEXT_PUBLIC_DEV_BASE_URL;
    }

    // For production and preview deploys
    return `https://${process.env.VERCEL_URL}`;
  };

  const baseUrl = getBaseUrl();
  const router = useRouter();
  const url = `${baseUrl}${router.asPath}`;

  return (
    <>
      <MetaTags
        description="Coding challenge for basement.studio"
        image={`${url}/og.png`}
        title="Basement Supply"
        url={url}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default App;
