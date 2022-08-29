import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import * as d3 from "d3";



export default function Home() {



const [store, setStore] = useState([])
const [name, setName] = useState('')
const [age, setAge] = useState('')
const [cl, setClass] = useState('')
const [phone, setPhone] = useState('')
const [asker, setAsker] = useState('')
const [gender, setGender] = useState('')




const addTheNewOne = () => {
  
var random = Math.random() * 50 * Math.random() * 5
let randomJ = Math.round(random)

var ran;

let sty1 = 'sty1'
let sty2 = 'sty2'
let sty3 = 'sty3'
let sty4 = 'sty4'
let sty5 = 'sty5'
let sty6 = 'sty6'
let sty7 = 'sty7'


if(randomJ <= 10){
  ran = sty1
}else if(randomJ <= 25){
  ran = sty2
}else if(randomJ <= 30){
  ran = sty3
}else if(randomJ <= 55 ){
  ran = sty4
}else if(randomJ <= 90){
  ran = sty5
}
else if(randomJ <= 110){
  ran = sty6
}
else {
  ran = sty7
}
  
  let txt = name;
  let n = txt.split(' ')
  let x = [...n] 
  
  


  
  
  if(x.length >= 2){
    let k = x[0][0] + x[1][0]
  
  

    
    let nam = name
    let ag = age
    let cla = cl
    let num = phone
    let gen = gender

if(store.every(each => each['name'] != nam ||
  each['age'] != ag || each['class'] != cla || each['phone'] != num 
) == true){
  setStore([...store, {"name": nam, 'gender': gen, "age": ag, "class": cla, "phone": num, 'avr': k, 'bg': ran}])
  setName('')
  setAge('')
  setClass('')
  setPhone('')
  setAsker('')
  setGender('')

  
}else {
  alert('Duplicate profile')
}

}

else if(txt.length > 1){
  
    let nam = name
    let ag = age
    let cla = cl
    let num = phone
    let gen = gender


  if(store.every(each => each['name'] != nam ||
  each['age'] != ag || each['class'] != cla || each['phone'] != num 
) == true){
    setStore([...store, {"name": nam, "age": ag, 'gender': gen, "class": cla, "phone": num, 'avr': x[0][0] + x[0][1], 'bg': ran}])
    setName('')
    setAge('')
    setClass('')
    setPhone('')
    setAsker('')
    setGender('')

  }else {
    alert('duplicate profile')
  }
  }
  else {
    let nam = name
    let ag = age
    let cla = cl
    let num = phone
    let gen = gender

  if(store.every(each => each['name'] != nam ||
  each['age'] != ag || each['class'] != cla || each['phone'] != num 
) == true){
    setStore([...store, {"name": nam, "age": ag, 'gender': gen,"class": cla, "phone": num, 'avr': txt, 'bg': ran}])
    setName('')
    setAge('')
    setClass('')
    setPhone('')
    setAsker('')
    setGender('')

  }else {
    alert('duplicate profile')
  }
  }
}



return (
  <div>
<div id="status">

  <h2>Status </h2>
<hr/>
<br/>


number of students: {store.length}

<br/>
highest age of student: {store.reduce((initial, each) =>{
if(each.age > initial){
  initial = each.age
  
}

return initial
}, 0)}

<br/>
lowest age of student: {store.reduce((init, each) => {

if(each.age < init){
  init = each.age
}
return init

}, 1000)}
<br/>
male students: {store.reduce((init, each) => {
if(each['gender'] == 'male'){
  init = init + 1
}

return init

}, 0)}
<br/>
female students: {store.reduce((init, each) => {
if(each['gender'] == 'female'){
  init = init + 1
}

return init

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
<input role="age" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='student age' type="number" required/>

  </fieldset>

  <fieldset>
<legend>class</legend>
<input role="class" value={cl} onChange={(e)=>{setClass(e.target.value)}} placeholder='student class' type="text" required/>

  </fieldset>

<fieldset>
  <legend>Gender</legend>
  <label for="gender">
Male <input role="gender" name='gender' onClick={()=>{setGender('male')}} type="radio" required/> Female <input role="gender" name='gender' onClick={()=>{setGender('female')}} type="radio" required/>

</label>
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
    if(name == ''){
      alert('fill the name')
    }else if(age == ''){
      alert('unknown age')
    }else if(cl == ''){
      alert('unknown class')
    }else {
        setAsker(1)
    }
}}>Submit</button>

<hr/>


<div className="list-student">
{store.map(each => {
  
  // let day = new Date()
  // let nx = `ID${day.getDay()}${day.getSeconds()}${day.getHours()}`
     return (
 <section key={each['name'] + each['class'] + each['age'] + each['phone'] + "" + store.length}>
 <span className={'profile ' + each['bg']}>
{each['avr']}
 </span>
   <div className='pp'>
   <p>{each['name']}</p>
    <p>{each['age']}</p>
    <p>{each['gender']}</p>
    <p>{each['class']}</p>
    <p>+251-{each['phone']}</p>
   </div>
 </section>)
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
  gender: <big>{gender}</big>
  <br/>
  class: <big>{cl}</big>
  <br/>
  phone: <big>+251 {phone}</big>
<br/>
</div>

<button onClick={()=>{

setAsker(0)

}} className='btn-1'>No, i am not sure</button>
<button onClick={addTheNewOne} className='btn-2'>Yes, i am sure</button>
</div>

</div>}

  </div>
)

}
