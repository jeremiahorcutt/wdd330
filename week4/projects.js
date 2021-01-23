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
  

   