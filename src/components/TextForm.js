import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    //    const handleUpClick = ()=>{
    //     // console.log("")
    //     let newText = text.toUpperCase();
    //     setText("newText")
    //    }

    //    const handleOnChange = (event)=>{
    //     // console.log("on change");
    //     setText(event.target.value)
    //    }

       const [text, setText] = useState("Enter text here");
  return (
 
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control mb-3" id="myBox" rows="8" placeholder='Enter text here'></textarea>
  <button className="btn btn-primary">Convert to Uppercase</button>
</div>  
    </div>
  )
}
