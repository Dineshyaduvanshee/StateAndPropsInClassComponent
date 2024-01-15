import { Component, ReactNode } from "react";
import { Button, Text,TextInput,View,  } from "react-native";
import Student from "./Component/Student";
// const App = () => {
//   return(
//     <View>
//       <Text style={{backgroundColor:'purple',textAlign:"center",fontSize:23,color:'cyan'}}>
//         !! State and Props in Class Component !!
//       </Text>
//       <TextInput style={{backgroundColor:'blue',textAlign:'center',fontSize:22,color:'cyan'}} placeholder="Enter Your Name : "/>
//     </View>
//   );
  
// }

class App extends Component{
  constructor() {
    super(); // Call the constructor of the base class (Component)
    
    this.state = {
      name: "Dinesh",
     
    };
  }
  updateName(val :any){
    this.setState({name:val })
  }
  render() {
      return(
        <View>
          <Text style={{backgroundColor:'purple',textAlign:"center",fontSize:20,color:'cyan'}}>
         !! State and Props in Class Component !!
       </Text>
       <Text style={{backgroundColor:'#9370db',textAlign:"center",fontSize:23,color:'cyan'}}>
         {this.state.name}
        
       </Text>
          <TextInput 
            style={{ backgroundColor: '#40e0d0', textAlign: 'center', fontSize: 20, color: 'white' }}
            placeholder="Enter Your Name : " onChangeText={(text)=>this.updateName(text)}/>
            <Button title='Press Me'/>
            <Student name={this.state.name}/>
        </View>
      )
  }
}
export default App;
