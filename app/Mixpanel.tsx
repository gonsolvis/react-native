import { Mixpanel } from "mixpanel-react-native";

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel(
  "b9fb34a1635124f6098b5248a23f41f0",
  trackAutomaticEvents
);
mixpanel.init();
mixpanel.setLoggingEnabled(false);
export default mixpanel;
