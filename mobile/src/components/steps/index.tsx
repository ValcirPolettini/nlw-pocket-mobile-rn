import {View, Text} from "react-native"
import { IconMapPin,IconQrcode, IconTicket } from "@tabler/icons-react-native"
import {s} from "./style"
import { Step } from "../step"

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}> Veja com funciona:</Text>
            <Step
                icon={IconMapPin} 
                title="teste"
                description="hueheheu"/>
            <Step
                icon={IconQrcode} 
                title="teste"
                description="hueheheu"/>
            <Step
                icon={IconTicket} 
                title="teste"
                description="hueheheu"/>
            
        </View>
    )
}