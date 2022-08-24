import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'



export default function Home() {

useEffect(()=>{
  setStore(store.sort(each => each.name))
})
const [store, setStore] = useState([])
const [name, setName] = useState('')
const [age, setAge] = useState('')
const [cl, setClass] = useState('')
const [phone, setPhone] = useState('')
const [asker, setAsker] = useState(0)

return (
  <div>
<div id="status">

  <h2>Status </h2>
  <br/>
  <br/>
number of students: {store.length}
<details>
  <summary>who?</summary>
<ul className='who'>
  {store.map(each => <li>{each.name}</li>)}
</ul>
</details>
<br/>
highest age of student: {store.reduce((initial, each) =>{
if(each.age > initial){
  initial = each.age
  
}

return initial
}, 0)}
<br/>


</div>



<div className="add">
<br/>
<h1>Data Base</h1>
<br/>
</div>
<br/>
<div className="add-new">
<h2>Add new</h2>
<form onSubmit={(event)=>{
event.preventDefault()
setAsker(1)
}}>

  <fieldset>
<legend>Name</legend>
<input value={name} onChange={(e)=>{setName(e.target.value)}} role="full name" placeholder='name of student' type="text" required/>

  </fieldset>

  <fieldset>
<legend>age</legend>
<input role="age" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='student age' type="text" required/>

  </fieldset>

  <fieldset>
<legend>class</legend>
<input role="class" value={cl} onChange={(e)=>{setClass(e.target.value)}} placeholder='student class' type="text" required/>

  </fieldset>

  <fieldset>
<legend>phone</legend>
<label>
<span>+251</span>
<input value={phone} onChange={(e)=>{setPhone(e.target.value)}} min='900000000' max="999999999" role="phone"  placeholder='x xx xxx xxxx' type="number" required/>

</label>
  </fieldset>
<br/><br/>

</form>


</div>
<button onClick={()=>{
if(name != '' && age != '' && cl != '' && phone != '' && phone > 900000000 && phone < 999999999){
setAsker(1)
}else if(name == '' && age != '' && cl != '' && phone != '' && phone > 900000000 && phone < 999999999){
  alert("unknown person | add Full name")
}else if(name != '' && age != '' && cl != '' && phone != '' && phone > 900000000 && phone < 999999999){
  setAsker(1)
}else if(name != '' && age == '' && cl != '' && phone != '' && phone > 900000000 && phone < 999999999){
  alert("unknown age | please set age")
}else if(name != '' && age != '' && cl != '' && phone != '' && phone > 900000000 && phone < 999999999){
  setAsker(1)
}else if(name != '' && age != '' && cl == '' && phone != '' && phone > 900000000 && phone < 999999999){
  alert("unknown class | give class")
}else if(name != '' && age != '' && cl != '' && phone == "" || phone < 900000000 || phone > 999999999){
alert("wrong phone || please set the number to write format")
}else if(name != '' && age != '' && cl != '' && phone != '' && phone > 900000000 && phone < 999999999)
  setAsker(1)
}}>Submit</button>
<button onClick={()=>{
  setStore(store.sort((a, b) => a['age'] - b['age']))
}}>Sort</button>
<hr/>


<div className="list-student">
{store.sort().map(each => {
  
    return <div key={store.length}>
   
    <br/>
 <section>

 <span className={each.bg}>
{each['avr']}
 </span>


    <p>Name: {each['name']} Age: {each['age']} Class: {each['class']} Phone: {each['phone']}</p>
    
 </section>
 <br/>
   
  </div>
  }
)}
</div>  



{asker == 1 && <div className='asker'>
<div className='ask-center'>
 
<em><h3>are you sure to add this student on the data bases</h3></em>
<div>
  name: <big>{name}</big>
  <br/>
  age: <big>{age}</big>
  <br/>
  class: <big>{cl}</big>
  <br/>
  phone: <big>+251 {phone}</big>
<br/>
</div>

<button onClick={()=>{
  setAsker(0)
}} className='btn-1'>No, i'm not sure</button>
<button onClick={()=>{
  setAsker(0)

let txt = name;
var x = txt.split(' ')



if(x.length >= 2){
  var k = `${x[0][0]}${x[1][0]}`

  setStore([...store, {"name": name, "age": age, "class": cl, "phone": phone, 'avr': k, bg: 'sty3'}])
  setName('')
  setAge('')
  setClass('')
  setPhone('')

}else{
  setStore([...store, {"name": name, "age": age, "class": cl, "phone": phone, 'avr': x[0][0] + x[0][1], bg: 'sty3'}])
  setName('')
  setAge('')
  setClass('')
  setPhone('')
}



}} className='btn-2'>Yes, i'm sure</button>
</div>

</div>}

  </div>
)

}
