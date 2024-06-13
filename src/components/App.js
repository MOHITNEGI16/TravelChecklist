import React, { useState } from 'react'
import Header from './Header';
import Form from './Form';
import Main from './Main';
import Footer from './Footer';

const initialItems = [
  { id: 1, desc: "Passports", qual: 2, packed: false },
  { id: 2, desc: "Socks", qual: 1, packed: false },
];



function App() {
  const [items, setItems] = useState(initialItems);

  
  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }



  function handleDeleteItem(id){
    setItems((items)=>items.filter(ele=>ele.id!==id));
  }


  function handleUpdateItemPacked(id){
    setItems((items)=>items.map(ele=>ele.id===id?
      {...ele,packed: !ele.packed}: ele))
  }

  function handleClearList(){
    setItems([]);
  }
  return (
    <div>
      <Header/>
      <Form onAddItems={handleAddItems}/>
      <Main items={items} onDeleteItem={handleDeleteItem} onToogelItem={handleUpdateItemPacked} onClearItem={handleClearList}/>
      <Footer items={items} />
    </div>
  )
}



// Childrens







export default App
export{Header,Footer,Main,Form}
