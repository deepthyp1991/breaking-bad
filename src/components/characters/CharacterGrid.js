import React from 'react'
import { Loading } from '../ui/Loading'
import { CharacterItem } from './CharacterItem'

// export const CharacterGrid = ({loading, items}) => {
//   return (
//    loading ? <Loading /> : <section className="cards">
//      {items.map((item) => (
//        <CharacterItem key={item.char_id} item={item} /> 
//      ))}
//    </section>
//   )
// }

export const CharacterGrid = ({items, loading}) => {
  return (
    loading ? <Loading /> : items.length === 0 ? 
    <div style={{width:"300px", margin:'auto', display:"block", color:"red",fontSize:"25px"}}>
    Sorry, result not found
    </div> :
      <section className="cards"> {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} /> 
       ))}
       </section> 
       )
       
       
}

// export const CharacterGrid = ({items}) => {
//   return (
//   items.length === 0 ? <div>Sorry, not found</div> :
//   <section className="cards"> {items.map((item) => (
//     <CharacterItem key={item.char_id} item={item} /> 
//   ))}
//   </section>
//   )
// }