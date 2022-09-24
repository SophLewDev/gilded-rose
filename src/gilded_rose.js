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
        this.items[i].sellIn -= 1
        this.decrementQualityByOne(this.items[i]);
      } else if (this.isItemSulfuras(this.items[i])) {
        this.items[i].quality = this.items[i].quality
      } else if (this.items[i].name === "Aged Brie") {
        this.items[i].sellIn -= 1
        this.incrementQualityByOne(this.items[i]);
      } else {
        console.log("4")
        if (this.items[i].sellIn > 10) {
          this.items[i].sellIn -= 1
          this.items[i].quality += 1
        } else if (this.items[i].sellIn < 11 && this.items[i].sellIn > 5) {
          this.items[i].sellIn -= 1
          this.items[i].quality += 2
        } else {
          this.items[i].sellIn -= 1
          this.items[i].quality += 3
        }
      }

      // if (this.isItemSulfuras(this.items[i])) { 
      //   console.log("4")
      //   this.items[i].quality = this.items[i].quality
      // }
    //   if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].sellIn < 11) {
    //       if (this.items[i].quality < 50) {
    //         console.log("5")
    //         this.incrementQualityByOne(this.items[i]);
    //       }
    //     }
    //     if (this.items[i].sellIn < 6) {
    //       if (this.items[i].quality < 50) {
    //         console.log("6")
    //         this.incrementQualityByOne(this.items[i]);
    //       }
    //     }
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             console.log("8")
    //             this.decrementQualityByOne(this.items[i]);
    //           }
    //         }
    //       } else {
    //         console.log("9")
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         console.log("10")
    //         this.incrementQualityByOne(this.items[i]);;
    //       }
    //     }
    //   }
    }

    return this.items;
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
    return item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros'
  }
}

module.exports = {
  Item,
  Shop
}