import { types, getParent, destroy } from 'mobx-state-tree'

export const Item = types
  .model({
    name: types.string,
    price: types.number,
    image: '',
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName
    },
    changePrice(newPrice) {
      self.price = newPrice
    },
    changeImage(newImage) {
      self.image = newImage
    },
    remove() {
      getParent(self, 2).remove(self)
    },
  }));

export const ItemList = types
  .model({
    items: types.optional(types.array(Item), []),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    },
    remove(item) {
      destroy(item)
    },
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0)
    },
  }));
