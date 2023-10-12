import { React,useState } from "react";

export function TextBox({count,read}){
    const [textBoxData,setTextBoxData] = useState([]);
    const [textBoxText,setTextBoxText] = useState([]);
    const onChangedLabel =(label) => {
      setTextBoxData(label) 
    }
    const onChangedText =(text) => {
        setTextBoxText(text);
    }
return(
    <div>
        <div>
    <label for="Name" style={{color: "black"}}>{count}: </label>
    
    <input type="text" defaultValue="Jules" onChange={onChangedLabel} />
    <br/>
    <input type="text" style={{backgroundColor: "GrayText", border: "none"}} readOnly={read} onChange={onChangedText}/>
    </div>
    <div>
    
    </div>
    </div>
    
   );

}
export function CheckBox({count,option,option2,option3}){
    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
return (
    <div>

    <label  style={{color: "black"}}>
   
        <input
          type="radio"
          name="options"
          value="Yes"
          checked={selectedOption === 'Yes'}
         
          onChange={handleOptionChange}
        />
        {option2}
      </label>
      <label  style={{color: "black"}}>
        <input
          type="radio"
          name="options"
          value="No"
          checked={selectedOption === 'No'}
          onChange={handleOptionChange}
        />
        {option3}
      </label>
    
  
    </div>
    
);
}