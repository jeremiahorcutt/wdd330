const links=[
    {
        label: "Week 1",
        url: "week1/index.html"
    },{
        label: "Week 2",
        url: "week2/index.html"
    },{
        label: "Week 3",
        url: "week3/index.html"
    },{
        label: "Week 4",
        url: "week4/index.html"
    },{
        label: "Week 5",
        url: "week5/index.html"
    },{
        label: "ToDo List",
        url: "week5/list.html"
    },
]

for (let i = 0; i < links.length; i++ ) {
  let list = document.createElement('li');
  let alink = document.createElement('a');
  alink.setAttribute("href", links[i].url);
  alink.textContent = links[i].label;
  list.appendChild(alink);
  document.querySelector('ol#tableofcontents').appendChild(list);
};

const links2=[
    {
        label: "Week 7",
        url: "week7/index.html"
    },{
        label: "Week 8",
        url: "week8/index.html"
    },{
        label: "Week 9",
        url: "week9/index.html"
    }
]

for (let i = 0; i < links2.length; i++ ) {
    let list = document.createElement('li');
    let alink = document.createElement('a');
    alink.setAttribute("href", links2[i].url);
    alink.textContent = links2[i].label;
    list.appendChild(alink);
    document.querySelector('ol#tableofcontents2').appendChild(list);
  };