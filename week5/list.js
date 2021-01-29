(function(){
  
    var list = document.querySelector('#list'),
        all = document.querySelector('#all'),
        active = document.querySelector('#active'),
        completed = document.querySelector('#completed'),
        add = document.querySelector('#add_btn'),
        item = document.querySelector('#item');
    
    add.addEventListener('click',function(e){
      list.innerHTML += '<li><input type="checkbox" name="'+ item.value +'" class="list_item"/>' + item.value + '<input type="button" name="remove" class="remove" value="X"</li>';
      save();
      item.value = "";
    },false)
    
    all.addEventListener('click',function(e){
      let t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      save();
    },false)

    active.addEventListener('click',function(e){
        let t = e.target;
        if(t.classList.contains('checked')){
          t.parentNode.removeChild(t);
        } else {
          t.classList.add('checked');
        }
        save();
      },false)

    completed.addEventListener('click',function(e){
        let t = e.target;
        if(t.classList.contains('checked')){
          t.parentNode.removeChild(t);
        } else {
          t.classList.add('checked');
        }
        save();
      },false)
    
    function save() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
                         
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  })();

  function clearStorage() {
      localStorage.clear();
      location.reload();
  }