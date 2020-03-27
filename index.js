function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value})
}

function deleteFromObjectByKey(obj, key) {
  let newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
