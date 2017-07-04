export function isRangeValid (start, end, items) {
  if (items.length === 0) {
    return true
  }
  let before = items.filter(item => { return item.end < start })
  let beforeLength = before.length

  if (beforeLength === 0) {
    return false
  } else if (beforeLength === items.length) {
    return true
  }

  return end < items[beforeLength].start
}
