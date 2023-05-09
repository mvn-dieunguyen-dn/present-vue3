
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchData() {
  await timeout(3000);
  return {
    name: "Dieunguyen",
    age: 25
  };
}
