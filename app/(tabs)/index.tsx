import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard"; // Assuming this was missing
import mixpanel from "../Mixpanel";
import {
  MPSessionReplay,
  MPSessionReplayConfig,
  MPSessionReplayMask,
} from "@mixpanel/react-native-session-replay";

// Initialize session replay
const config = new MPSessionReplayConfig({
  wifiOnly: false,
  recordingSessionsPercent: 100,
  autoStartRecording: true,
  autoMaskedViews: [MPSessionReplayMask.Image, MPSessionReplayMask.Text],
  flushInterval: 5,
  enableLogging: true,
});

(async () => {
  try {
    await MPSessionReplay.initialize(
      "b9fb34a1635124f6098b5248a23f41f0",
      "965018066",
      config
    );
    // You typically only want to start recording, not immediately stop it
    // await MPSessionReplay.startRecording();
    // await MPSessionReplay.stopRecording(); // Remove this unless for testing

    // Check recording status (optional)
    const recording = await MPSessionReplay.isRecording();
    console.log("Mixpanel Session Replay recording status:", recording);
  } catch (error) {
    console.error("Initialization error:", error);
  }
})();

mixpanel.track("some_event", {
  some_property: "some_value",
});

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Latest Movies
            </Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
