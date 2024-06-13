import { useState } from "react";

export default function Form({onAddItems}) {
  // state 
  const [desc, setDesc] = useState("");
  const [qual, setQual] = useState(1);
  // const [items, setItems] = useState([]); needed by the Main component 

  // function handleAddItems(item){
  //   setItems((items)=>[...items,item])
  // } function for state change also get uplifted

  // functions
  function handleSubmit (e) {
    e.preventDefault();
    const newItem = {desc, qual, packed:false, id: Date.now() };
    console.log(newItem);

     
    onAddItems(newItem);
    setDesc("");
    setQual(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select value={qual} onChange={(e)=>{
        setQual(Number(e.target.value));
      }}>
        {
          Array.from({length:20},(_,i)=>i+1).map((num)=>(
            <option value={num} key={num}>
              {num}
            </option>
          ))
        }
      </select>
      <input type="text" placeholder='Item...' value={desc} onChange={(e)=>{
        setDesc(e.target.value);
      }}/>
      <button>ADD</button>
    </form>
  )
}
