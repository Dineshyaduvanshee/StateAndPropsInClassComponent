
import React ,{ Component } from "react";

import { Text, View } from "react-native";

class Student extends Component {
render(){
   // console.warn(this.props)
    return(
        <View>
            <Text style={{backgroundColor:'#7b68ee',textAlign:'center',color:'#006400',fontSize:23}}>!! Student Name : {this.props.name} !!</Text>
        </View>
    )
}
}
export default Student;

function render() {
    
}
