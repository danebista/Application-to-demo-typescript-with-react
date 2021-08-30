import React from 'react';
interface ChildProps {
    color: string;
    onClicked: ()=> void;
}

export const Child = ({color, onClicked}:ChildProps)=> (
    <div>
         <h1>I am a child{color}</h1>
         <button onClick={onClicked}>Click me</button>
    </div>
)

export const ChildAsFc:React.FC<ChildProps> = ({color, onClicked})=>(
 <div>{color}
  <button onClick={onClicked}>Click me</button>
 </div>
)