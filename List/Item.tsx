import * as React from "react"

export const ListItem = ({item}) =>{
  return <div className="list-item">
    <div className="title">{item.title}</div>
    <div className="img">
      <img src={item.thumbnail} loading="lazy" alt="img" />
    </div>
    <div className="price">{item.price}$</div>
    <button className="detail-btn">Detail</button>
  </div>
}