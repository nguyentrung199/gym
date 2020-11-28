
//////////////////// CONFIG APP

import Constants from 'expo-constants';

const isStandAloneApp = Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "YOUR_BACKEND_URL",

    // facebook page url
    FACEBOOK: "https://facebook.com/xfit.vn",

    // youtube page url
    YOUTUBE: "https://www.youtube.com/channel/UCfbV0UVlBR-VZrucbq4G0jQ",

    // twitter page url
    TWITTER: "https://twitter.com/xfitvn",

    // twitter page url
    INSTAGRAM: "https://www.instagram.com/xfit.vn/",

    // banner admob unit id
    BANNER_ID: "ca-app-pub-4232853679195184/4472153551",
    
    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
