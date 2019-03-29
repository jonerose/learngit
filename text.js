function add(){
    console.log(this.name);
}
var o = {name:'123'};
add.call(o);