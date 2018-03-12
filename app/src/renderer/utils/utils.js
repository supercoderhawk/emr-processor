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
export function getOffset (element) {
  let top = 0
  let left = 0
  do {
    top += element.offsetTop || 0
    left += element.offsetLeft || 0
    element = element.offsetParent
  } while (element)

  return {
    top: top,
    left: left
  }
}
