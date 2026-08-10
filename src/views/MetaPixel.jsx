import { useEffect } from 'react';
import { useHomeController } from '../controllers/useHomeController.js';

// Injects the standard Meta (Facebook) Pixel snippet into <head> once an admin
// has set a Pixel ID in the panel. Renders nothing itself. The bootstrap runs
// only once; if the ID arrives after fbq is already loaded we just re-init.
export default function MetaPixel() {
  const { metaPixelId } = useHomeController();

  useEffect(() => {
    if (!metaPixelId) return;

    if (!window.fbq) {
      /* eslint-disable */
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
    }

    window.fbq('init', String(metaPixelId));
    window.fbq('track', 'PageView');
  }, [metaPixelId]);

  return null;
}
