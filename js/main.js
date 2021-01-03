const links=[
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    }
]

for (let i = 0; i < links.length; i++ ) {
  let list = document.createElement('li');
  let link = document.createElement('a');
  link.setAttribute("src", link[i].url);
  link.textContent = link[i].label;
  list.appendChild(link):
  document.querySelector('ol#tableofcontents').appendChild(list);
};