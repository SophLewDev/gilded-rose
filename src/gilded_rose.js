class Item {
  // do not alter any of these
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isItemOther(this.items[i])) {
        if (this.items[i].sellIn > 0 && this.items[i].quality > 0) {
          this.decrementQualityByOne(this.items[i]);
          this.items[i].sellIn -= 1
        } else if (this.items[i].sellIn < 1 && this.items[i].quality > 2) {
          this.items[i].sellIn -= 1
          this.items[i].quality -= 2
        } else {
          this.items[i].sellIn -= 1
          this.items[i].quality = 0
        }
      } else if (this.isItemSulfuras(this.items[i])) {
          this.items[i].quality = this.items[i].quality
      } else if (this.items[i].name === "Conjured") {
          this.items[i].sellIn -= 1
          this.items[i].quality -= 2
      }else if (this.items[i].name === "Aged Brie") {
        this.items[i].sellIn -= 1
        if (this.items[i].quality < 50) {
          this.incrementQualityByOne(this.items[i]);
        } else {
          this.items[i].quality = 50
        }
      } else {
        if (this.items[i].sellIn > 10 && this.items[i].quality < 50) {
          this.items[i].sellIn -= 1
          this.items[i].quality += 1
        } else if (this.items[i].sellIn < 11 && this.items[i].sellIn > 5 && this.items[i].quality < 49) {
          this.items[i].sellIn -= 1
          this.items[i].quality += 2
        } else if (this.items[i].sellIn < 6 && this.items[i].sellIn > 0 && this.items[i].quality < 48) {
          this.items[i].sellIn -= 1
          this.items[i].quality += 3
        } else if (this.items[i].quality >= 50) {
          this.items[i].sellIn -= 1
          this.items[i].quality = 50
        } else {
          this.items[i].sellIn -= 1
          this.items[i].quality = 0
        }
      }
    }
  }
  
  incrementQualityByOne(item) {
    item.quality += 1
  }
  decrementQualityByOne(item) {
    item.quality -= 1
  }

  isItemSulfuras(item){
    return item.name === 'Sulfuras, Hand of Ragnaros'
  }

  isItemOther(item) {
    return item.name != 'Aged Brie' 
    && item.name != 'Backstage passes to a TAFKAL80ETC concert' 
    && item.name != 'Sulfuras, Hand of Ragnaros' 
    && item.name != "Conjured"
  }
}

module.exports = {
  Item,
  Shop
}