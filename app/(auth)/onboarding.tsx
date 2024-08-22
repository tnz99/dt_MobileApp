import { router } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Onboarding = () =>{
    return(
        <SafeAreaView className="flex h-full items-center justify-between bg-[#F4F3F3]">
            <TouchableOpacity 
            onPress ={()=>{
                router.replace("/(auth)/sign-up");
            }}
            className="w-full flex justify-end items-end p-5"
            >
                <Text text-black text-lg font-interExtraBold>Skip</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Onboarding