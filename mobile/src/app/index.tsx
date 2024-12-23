import {View} from "react-native"

import {Welcome} from "@/components/welcome"
import { Steps } from "@/components/steps"
import { Button } from "@/components/button"

export default function Index(){
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome/>
            <Steps/>
            <Button isLoading={true}>
                <Button.Title>
                    heheheh
                </Button.Title>
            </Button>
        </View>
    )
}