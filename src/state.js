import { useState } from "react";


export default function Buton(){
    const [FormData,setFormData] = useState({name:'',age:'',info:'',isaman:false,country:''})
    return (
        <div>
            <form onSubmit={(even)=>{even.preventDefault()}}>
                <label>Name</label><br></br>
                <input onChange={(data)=>{
                    setFormData({...FormData,name: data.target.value})
                }} ></input><hr></hr>
                <label>Age</label><br></br>
                <input  onChange={(data)=>{
                    setFormData({...FormData,age: data.target.value})
                }}></input><hr></hr>
                <label>Are you a man : </label>
                <input type='checkbox' checked={FormData.isaman} onChange={(even)=>{
                    setFormData({...FormData,isaman:even.target.checked})
                }} /><hr/>
                <label>Your country : </label>
                <select onChange={(event)=>{
                    setFormData({...FormData,country:event.target.value})
                }}>
                    <option>Algeria</option>
                    <option>France</option>
                    <option>Egypt</option>
                    <option>KSA</option>
                </select><hr/>
                <label>General info : </label><br/>
                <textarea onChange={(even)=>{
                    setFormData({...FormData,info:even.target.value})
                }}></textarea><hr/>
                <button onClick={()=>{;console.log(FormData)}}>Submit</button>
            </form>
        </div>
    )
}
// parseInt()
