import { useState } from "react";
import { CheckBox, TextBox } from "./TextBox";

export function DynamicTextBox(){
    var text = 0;
    const [textBoxCount,setTextBoxCount] = useState(0);
    const textBoxes =[];
    var gery= true;
    const createDynamicTextBox =async()=>{
        setTextBoxCount(textBoxCount + 1);
        
    }
   const  removeItem = async()=>{
    setTextBoxCount(textBoxCount - 1);
   }
    for (let i=0;i<textBoxCount; i++){
        textBoxes.push(
        <div>
        <TextBox key={i} count={i + 1} read={gery}/>
        <button onClick={removeItem}>REMOVE ITEM</button> 
        </div>
            );
    }
    const submitData = async (data) => {
      //save data to db 
    };

    return(
    <div>
    {textBoxes}
    <br/>
    <button onClick={createDynamicTextBox}>CLICK ME </button>  
    <button onClick={submitData}>SUBMIT</button>  
      
    </div>
     
    );
}