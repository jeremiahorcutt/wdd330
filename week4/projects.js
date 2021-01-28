//vector type
class Vec{
    constructor(x, y){
        this.x = x;
        this.y =y;
    }
    plus(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other){
        return new Vec(this.x - other.x, this.y- other.y);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);



//groups
class Group {
    constructor(){
        this.groupies =[];
    }
    add(num){
        if (!this.has(num)){
        this.groupies.push(num);
    }
    }
    delete(num){
        this.groupies = this.groupies.filter(n => n !== num);
    }
    has(num){
        this.groupies.includes(num);
    }
    static from(member){
        let newgroup = new Group;
        for (let num of member){
            newgroup.add(num);
        }
        return newgroup;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  console.log(group.has(30));
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  
  $(document).ready(function() {
    $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
    noun1 : {
    required: true,
    },
    plural: {
    required: true,
    },
    noun3: {
    required: true,
    },
    place: {
    required: ture
    },
    noun4:{
    required: true
    },
    adj: {
    required: true
    }
    },
    messages : {
        noun1: {
          required: "Please enter the first noun"
        },
        plural: {
          required: "Please select one",
        },
        noun3: {
          required: "Please enter the third noun"
        },
        place: {
            required: "Please select a place"
          },
        noun4: {
            required: "Please enter the fourth noun"
          },
        adj: {
            required: "Please enter an adjective"
          }
      }

    });
    });

  function adlib(){
      document.getElementById('ad').style.display = "block";
      let noun1 = document.getElementById("noun1").value;
      document.getElementById("in1").innerHTML = noun1;
      let noun2 = document.querySelector('input[name="plural"]:checked').value;
      document.getElementsByClassName("in2").innerHTML = noun2;
      let noun3 = document.getElementById("noun3").value;
      document.getElementById("in3").innerHTML = noun3;
      let noun4 = document.getElementById("noun4").value;
      document.getElementById("in6").innerHTML = noun4;
      let adj = document.getElementById("adj").value;
      document.getElementById("in5").innerHTML = adj;
      let place = document.getElementById("place").value;
      document.getElementById("in4").innerHTML = place;
  }