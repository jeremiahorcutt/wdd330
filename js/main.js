const links=[
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    }
]

for (let i = 0; i < links.length; i++ ) {
  let list = document.createElement('li');
  let alink = document.createElement('a');
  alink.setAttribute("src", links[i].url);
  alink.textContent = links[i].label;
  list.appendChild(alink);
  document.querySelector('ol#tableofcontents').appendChild(list);
};