function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      console.log(target.indexOf(test[i]))
      return false;
    }
  }
  return true;
}

mutation(["hello", "neo"])
