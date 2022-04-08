import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CharacterProfileScreen from "../screens/CharacterProfileScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "papayawhip" },
            headerShown: false,
          }}
        >
          {/*<Stack.Screen name="LogInScreen" component={LogInScreen} />*/}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

          <Stack.Screen
            name="CharacterProfileScreen"
            component={CharacterProfileScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
