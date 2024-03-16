import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AmazonLogo from "../../assets/amazon_logo.png";
import PrimeVideoLogo from "../../assets/prime_video.png";

export const Home = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={PrimeVideoLogo} style={styles.primeLogoImg} />
            <Image source={AmazonLogo} style={styles.amazonLogoImg} />
          </View>
          <View style={styles.category}>
            <TouchableOpacity>
              <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Tv Show</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Movie</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Kids</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#232F3E",
      alignItems: 'flex-start',
    },

    header : {
      width: '100%',
      padding: 80,
      alignItems: "center",
      justifyContent: "center",
    },

    amazonLogoImg: { 
      marginLeft: 30,
      margiTop: -32,
      marginBottom: -60,
    },

    category: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 30,
      marginBottom: 15,
    },

    TextoRool: {

    }
});
