import { Helmet } from 'react-helmet-async';
import favicon16 from '../../icons/favicon/favicon-16x16.png';
import favicon32 from '../../icons/favicon/favicon-32x32.png';
import faviconSafari from '../../icons/favicon/safari-pinned-tab.svg';
import faviconApplTouch from '../../icons/favicon/apple-touch-icon.png';
import favManifest from '../../icons/favicon/site.webmanifest';

const HelmetSeo = () => {
  return (
    <Helmet>
      <title>Phonebook App</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={faviconApplTouch}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={favicon32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={favicon16}
      />
      <link rel="manifest" href={favManifest} />
      <link
        rel="mask-icon"
        href={faviconSafari}
        color="#5bbad5"
      />
    </Helmet>
  );
};

export default HelmetSeo;
