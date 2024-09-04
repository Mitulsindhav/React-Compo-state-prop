import React from 'react'

function RenderList() {
  
    const items = [
        {id:1,name:'Apple'},
        {id:2,name:'Mango'},
        {id:3,name:'Banana'},
        {id:4,name:'kiwi'}
        
    ]
   

    return (
    <div style={{backgroundColor:'green',width:900,paddingTop:50,paddingBottom:50, paddingLeft:100,paddingRight:100,margin:80}}>
        
    
    <h1> The "React Way" to Render a List </h1>

    <input type="checkbox" name="" id="" />
    
     {items.map((items)=>(


<ul  style={{backgroundColor:'white'}}> 

  
<li style={{fontSize:25,color:'black',listStyle:'none',textAlign:'left'}}>  {items.name}</li>
  </ul>

        ))}
         
    </div>
  )
}
 

export default RenderList