
export default function Items ({ele,key,onDeleteItem,onToogelItem}){
  return (
    <li>
      <input type='checkbox' value={ele.packed} onChange={()=>onToogelItem(ele.id)}/>
      <span style= {ele.packed ? {textDecoration:"line-through"} : {}}>
       {ele.qual} {ele.desc}
      </span>
      <button onClick={()=>onDeleteItem(ele.id)}>
        ❌
      </button>
    </li>
  )
}
