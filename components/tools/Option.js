import { TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-elements"

export const Option = ({icon, color, label}) => {
    return <TouchableOpacity style={{flexDirection: 'row'}}>
        <Icon name={icon} color={color} size={30} />
        <View style={{width: 15}} />
        <Text style={{fontSize: 22}}>{label}</Text> 
    </TouchableOpacity>
}