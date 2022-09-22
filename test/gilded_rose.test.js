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
});