@@include('burger.js');


const app = document.querySelector('#app');

const threeDepth = (el, currentLevel = 0) => {
  if (!el) throw new Error("Can't have element");
  if (el.children.length === 0) return currentLevel;
  
  let maxDepth = currentLevel;
  currentLevel++;

  Array.from(el.children).forEach(element => {
    maxDepth = Math.max(threeDepth(element, currentLevel), maxDepth);
  })

  return maxDepth;
}

console.log(threeDepth(app));
