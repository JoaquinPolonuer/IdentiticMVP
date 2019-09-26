import { Header } from "react-native-elements";

export default class IdentiticHeader extends Header {

    render(){
        return(

            <Header
                linearGradientProps={{
                colors: ["#7444E8", "#B43DF3"],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 }
                }}
                centerComponent={<Bar>IDENTITIC</Bar>}
                rightComponent={
                <MaterialCommunityIcons
                    name="message-reply"
                    size={28}
                    color={"#FFF"}
                    style={{ position: "absolute", right: 10, top: -15 }}
                />
                }
            />
          
          );
    }

}
