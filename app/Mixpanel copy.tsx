// import { Mixpanel } from "mixpanel-react-native";
// import {
//   MPSessionReplay,
//   MPSessionReplayConfig,
//   MPSessionReplayMask,
// } from "@mixpanel/react-native-session-replay";

// // Initialize session replay
// const config = new MPSessionReplayConfig({
//   wifiOnly: false,
//   recordingSessionsPercent: 100,
//   autoStartRecording: true,
//   autoMaskedViews: [MPSessionReplayMask.Image, MPSessionReplayMask.Text],
//   flushInterval: 5,
//   enableLogging: true,
// });

// await MPSessionReplay.initialize(
//   "b9fb34a1635124f6098b5248a23f41f0",
//   distinctId,
//   config
// ).catch((error) => {
//   console.error("Initialization error:", error);
// });

// // Control recording
// await MPSessionReplay.startRecording();
// await MPSessionReplay.stopRecording();

// // Check recording status
// const recording = await MPSessionReplay.isRecording();
