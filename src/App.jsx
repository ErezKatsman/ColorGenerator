import Form from "./components/Form.jsx";
import ColorList from "./components/ColorList.jsx";
import {useState} from "react";
import Values from "values.js";
import {ToastContainer, toast} from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addColor = (c) => {
    try{
      const newColors = new Values(c).all(10);
      setColors(newColors);
      toast.success('Success');
    }catch(err){
      toast.error(err.message)
    }
    console.log(c)
  }

  return <main>
    <Form addColor={addColor}/>
    <ColorList colors={colors}/>
    <ToastContainer position='top-center'/>
  </main>;
};
export default App;
