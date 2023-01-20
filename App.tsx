import * as React from 'react';
import { List } from './List/List';
import './style.css';
const DATA_URL = 'https://dummyjson.com/products?limit=50';

export default function App() {
  const [items, setItems] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [filterText, setFilterText] = React.useState('');

  React.useEffect(() => {
    fetch(DATA_URL)
      .then((re) => re.json())
      .then((data) => {
        console.log(data);
        setItems(data.products)
      });
  }, []);

  React.useEffect(() => {
    if (!filterText.trim()) {
      setFilteredItems(items);
    } else {
      const fItems = items.filter((item) =>
        item.title.toLowerCase().includes(filterText.trim().toLowerCase())
      );
      setFilteredItems(fItems);
    }
  }, [items, filterText]);
 

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" onChange={(e)=>setFilterText(e.target.value)} value={filterText} />
      <List items={filteredItems} /> 
    </div>
  );
}
