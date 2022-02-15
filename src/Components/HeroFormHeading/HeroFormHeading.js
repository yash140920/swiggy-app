import React,{useState,useEffect,useCallback,useRef} from "react";
import "./HeroFormHeading.css";
import TextTransition,{presets} from "react-text-transition";


const HeadArray=["Unexpected guests?","Cooking gone wrong?","Movie marathon?","Game night?","Late night work?",
"Hungry?"];

function HeroFormHeading(){
 const [heading,setHeading] = useState("Hungry?");
const index = useRef();

const changeHead=useCallback(
    () => {
        index.current<HeadArray.length-1?(++index.current):(index.current=0);
        setHeading(HeadArray[index.current]);
    },[]);

    useEffect(() => {
        const interval=setInterval(changeHead,3000);
        return () => clearInterval(interval);
    }, [changeHead])

    return (
          <div>
              <h1 className="heroformhead">
              <TextTransition
                text={heading} 
                springConfig={presets.gentle}
                />
              </h1>
              <h2 className="heroformsubhead">Order food from favourite restaurants near you.</h2>
          </div>    
 
    )
}

export default HeroFormHeading;