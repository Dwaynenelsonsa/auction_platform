export function getStoredList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

export function saveStoredList(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}

export function toggleStoredItem(key, item) {
  const current = getStoredList(key);
  const exists = current.some((savedItem) => savedItem._id === item._id);

  const next = exists
    ? current.filter((savedItem) => savedItem._id !== item._id)
    : [...current, item];

  saveStoredList(key, next);

  return {
    saved: !exists,
    list: next
  };
}

export function addBid(productId, amount) {
  const bids = getStoredList("mpumalanga_bids");

  const bid = {
    id: Date.now(),
    productId,
    amount,
    createdAt: new Date().toLocaleString()
  };

  const next = [bid, ...bids];
  saveStoredList("mpumalanga_bids", next);

  return bid;
}

export function getBids() {
  return getStoredList("mpumalanga_bids");
}
