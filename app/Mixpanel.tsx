//import Mixpanel class from the SDK
import { Mixpanel } from "mixpanel-react-native";

const trackAutomaticEvents = true; // disable legacy autotrack mobile events
const useNative = true; // use Native Mode
const serverURL = "https://api.mixpanel.com"; // set the server URL to Mixpanel's US domain
const optOutTrackingDefault = false; // opt users into tracking by default
const superProperties = {
  // register super properties for the user
};

// create an instance of Mixpanel using your project token
// with the configuration options abovei
const mixpanel = new Mixpanel(
  "b9fb34a1635124f6098b5248a23f41f0",
  trackAutomaticEvents,
  useNative,
  serverURL,
  optOutTrackingDefault,
  superProperties
);

//initialize Mixpanel
mixpanel.setLoggingEnabled(true);

mixpanel.init();

export default mixpanel;

// to start npx expo start
