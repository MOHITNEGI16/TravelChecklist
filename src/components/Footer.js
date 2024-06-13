export default function Footer({items}) {


  const numsItems =  items.length;
  const checkedItems = items.filter((ele)=>ele.packed===true).length;
  const percentage = Math.round((checkedItems/numsItems)*100);


  if(isNaN(percentage)){return(
    <footer className='stats'>
    <em>
     "Start adding some items to your packing list"
    </em>
  </footer>
  )}
  else{
    return (
      <footer className='stats'>
        <em>
          {
           percentage === 100 ?
          "You have packed everything up and you are ready to go ✈":
          ` You have ${numsItems} items in your list, and you already packed ${checkedItems} (${percentage}% of the items are packed)`
        }
        </em>
      </footer>
    )
  }

}
