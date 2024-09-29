// const links = document.querySelectorAll('aside a')
const aside = document.querySelector('aside')
const section = document.querySelector('section')

import jsonData from "./aarti-main.json" with{type: 'json'};
console.log(jsonData)
window.onload = function(){
  loadHeadings();
  loadAarti(0);
}
function loadHeadings()
{
  jsonData.ganeshaarti.forEach(element => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = element.title;
    aside.appendChild(link);
  });
}
function loadAarti(index){
  const heading = document.createElement('h1');
  heading.innerText = jsonData.ganeshaarti[index].title;
  const aarti = document.createElement('p');
  aarti.innerHTML = jsonData.ganeshaarti[index].lyrics;
  aarti.style.fontSize = "20px"
  section.innerHTML = '';
  section.append(heading);
  section.append(aarti); 
}

$(document).on('click', 'aside a', function() {
    let index = $(this).index();
    loadAarti(index);
});