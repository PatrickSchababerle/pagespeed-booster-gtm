/**
 * Pagespeed Booster for Google Tag Manager
 *
 * Author: Patrick Schababerle <patrick.schababerle@gmx.net>
 * Website: secret-share.com
 */

(() => {
    const psb = window.gtm_psb;
    if(psb !== undefined) {
        setTimeout(() => {
            dataLayer.push({'event' : psb.eventName});
        }, psb.deferTime);
    }
})();