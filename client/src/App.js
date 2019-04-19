import React, { Component } from 'react';
import './App.css';
import GeoCacher from"../src/components/GeoCacher.js"
import Cache from "../src/components/Cache.js"
import Footer from "../src/components/Footer.js"
import Item from '../src/components/Item.js';

require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state= {
      itemName: "logbooks",
      itemAddress: "",
      cacheName: "Wayne's Junkyard",
      cacheCoordinates: "2345w 3456N",
      cacheAddress: "",
      geocacherName: "Wayne",
      geocacherAddress: "",
      itemsInBag: [],
      itemsInCache: []
    }
    this.setItemInCache = this.setItemInCache.bind(this);
  }

  setItemInCache(items) {
    this.setState({
      itemsInCache : items
    })
    this.changeItem.setItems(items);
  }

  render() {
    return (
      <div className="container">
      <Cache             
            cacheName={this.state.cacheName}
            cacheCoordinates={this.state.cacheCoordinates}
            cacheAddress={this.state.cacheAddress}
            itemAddress={this.state.itemAddress}
            itemsInCache={this.state.itemsInCache}
            ref={changeItem => {
              this.changeItem = changeItem;
            }} /><br />

      <Item itemName={this.state.itemName} 
            itemAddress={this.state.itemName}/><br />

      <GeoCacher             
            geocacherName={this.state.geocacherName}
            geocacherAddress={this.state.geocacherAddress}
            cacheAddress={this.state.cacheAddress}
            itemAddress={this.state.itemAddress}
            cacheCoordinates={this.state.cacheCoordinates}
            itemsInBag={this.state.itemsInBag}
            itemsInCache={this.state.itemsInCache}
            changeItemIncache={this.setItemInCache} />
      <Footer />
      </div>
    );
  }
}

export default App;
