import { useState } from "react";
import Items from "./Items";
export default function Main({items, onDeleteItem, onToogelItem, onClearItem}) {

  const [sort,setSort] = useState("input");
 
  let sortedItems;

  if(sort === "input"){sortedItems = items}

  if(sort === "description"){sortedItems = items.slice().sort((a,b)=>a.desc.localeCompare(b.desc))}

  if(sort === "packed")sortedItems = items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  return (
    <div className='list'>
    <ul >
      {
      sortedItems.map((ele)=>{
        return (
          <Items ele={ele} key={ele.id} onDeleteItem={onDeleteItem} onToogelItem={onToogelItem}/>
        )
      })
      }
    </ul>
    <div className='actions'>
    <select value={sort} onChange={(e)=>setSort(e.target.value)}>
      <option value="input">Sort by input order</option> 
      <option value="description">Sort by description</option> 
      <option value="packed">Sort by packed status</option> 

    </select>
    <button onClick={onClearItem}>CLEAR LIST</button>
    </div>
    </div>
      )
}
