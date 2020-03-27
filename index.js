function updateObjectWithKeyAndValue(obj, key, value) {
  let newObj = obj.clone()
  newObj[key] = value
  return newObj
}
