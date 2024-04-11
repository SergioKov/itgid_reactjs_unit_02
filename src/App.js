import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Header from './Header/Header.js';
import Goods from './Goods';

const headerData = {
  site_name: "My test site name",
  second_header: "Best of the best",
  nav : [
    {link: "nav1", text: "my link"},
    {link: "nav2", text: "my link 2"},
    {link: "nav3", text: "my link 3"}
  ]
}
const goods = [
  {"title": "apple", "price": 220, "image": "https://cdn.icon-icons.com/icons2/16/PNG/256/fruit_apple_food_1816.png"},
  {"title": "pear", "price": 150, "image": "https://cdn.icon-icons.com/icons2/1166/PNG/512/1488897564-pear_81763.png"},
  {"title": "banana", "price": 330, "image": "https://cdn.icon-icons.com/icons2/1808/PNG/512/fruit-banana_115167.png"}
];

function App() {
  return (
    <div>
        <Header data={headerData}/>
        <Test/>

        {goods.map(item => <Goods key={item.title} title={item.title} price={item.price} image={item.image} />)}
    </div>
  );
}

export default App;
