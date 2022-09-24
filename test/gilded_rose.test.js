const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("return item name, sell in date, and quality value", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.items
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it("decreases the quality of 'other' item by 1 when one day has passed", () => {
    const gildedRose = new Shop([new Item("foo", 2, 2)]);
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(1)
  })
  it("decreases the quality of more than one 'other' item by 1 when one day has passed", () => {
    const item1 = new Item("foo", 2, 2)
    const item2 = new Item("paper", 2, 2)
    const gildedRose = new Shop([item1,item2]);
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(1)
    expect(items[1].quality).toEqual(1)
  })
  it("increases the quality of aged brie and backstage passes by 1", () => {
    const item1 = new Item("Aged Brie", 2, 2)
    const item2 = new Item("Backstage passes to a TAFKAL80ETC concert", 15,2)
    const gildedRose = new Shop([item1, item2])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(3)
    expect(items[1].quality).toEqual(3)
  })
  it("does not modify sulfuras' quality value", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros",0,10)
    const gildedRose = new Shop([item])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(10)
  })
  it("keeps Sulfuras' sellIn value as 0 as it never has to be sold", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros",0,10)
    const gildedRose = new Shop([item])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
  })
  it("decreases the sellIn value by one for 'other' items", () => {
    const gildedRose = new Shop([new Item("foo", 2, 2)]);
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(1)
  })
  it("decreases the sellIn value by one for Aged Brie and Backstage passes item", () => {
    const item1 = new Item("Aged Brie", 2, 2)
    const item2 = new Item("Backstage passes to a TAFKAL80ETC concert", 15,2)
    const gildedRose = new Shop([item1, item2])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(1)
    expect(items[1].sellIn).toEqual(14)
  })
  it("increases the quality of backstage passes by 2 when sellIn is between 6 and 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10,5)
    const gildedRose = new Shop([item])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(7)
  })
  it("increases the quality of backstage passes by 2 when sellIn is between 0 and 5", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5,5)
    const gildedRose = new Shop([item])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(8)
  })
  it("returns the quality value of backstage passes as 0 when the concert has been", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0,5)
    const gildedRose = new Shop([item])
    const items = gildedRose.items
    gildedRose.updateQuality()
    expect(items[0].quality).toEqual(0)
  })
});