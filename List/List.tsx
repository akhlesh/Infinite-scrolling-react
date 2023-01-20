import * as React from "react"
import { ListItem } from "../List/Item"

export const List = ({items}) =>{
  return <div className="list">
   {items.map(i=> <ListItem key={i.id} item={i} />)}
  </div>
}