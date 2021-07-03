var container = document.createElement('div');
container.setAttribute('class','container');

var table = document.createElement('table');
table.className="table table-stripped";
table.setAttribute('id','pager');

var thead = document.createElement('thead');

var tr = document.createElement('tr');
var th1= createtrth('th','ID');
var th2= createtrth('th','Name');
var th3= createtrth('th','Email');
tr.append(th1,th2,th3);
thead.append(tr);

var tbody = document.createElement('tbody');
tbody.setAttribute('id', 'data1');


table.append(thead,tbody);  
container.append(table);
document.body.append(container);



function createtrth(elementname, value=" "){
    var td=document.createElement(elementname);
    td.innerHTML=value;
    return td;
}

var req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
req.send();
req.onload = function fun(){
        var data = JSON.parse(this.response);
        for(let i=0;i<10;i++)
        {
            var tr = document.createElement('tr');
            var td1= document.createElement('td');
            td1.innerHTML=data[i].id;
            var td2= document.createElement('td');
            td2.innerHTML=data[i].name;
            var td3= document.createElement('td');
            td3.innerHTML=data[i].email;
            tr.append(td1,td2,td3);
            tbody.append(tr);
        }
        function pagination(x){ 
            tbody.innerHTML=""
    for(var i=(x-1)*10;i<(10*x);i++)
    
    {
        var tr = document.createElement('tr');
       var td1= document.createElement('td');
       td1.innerHTML=data[i].id;
       var td2= document.createElement('td');
       td2.innerHTML=data[i].name;
       var td3= document.createElement('td');
       td3.innerHTML=data[i].email;
       tr.append(td1,td2,td3);
       tbody.append(tr);
    
    }}
    var b=document.createElement("button")
    b.innerHTML="First"
    b.onclick=function(){
        tbody.innerHTML=""
        for(let i=0;i<10;i++)
        {
            var tr = document.createElement('tr');
            var td1= document.createElement('td');
            td1.innerHTML=data[i].id;
            var td2= document.createElement('td');
            td2.innerHTML=data[i].name;
            var td3= document.createElement('td');
            td3.innerHTML=data[i].email;
            tr.append(td1,td2,td3);
            tbody.append(tr);
        }
    }
    container.append(b)

var arry=[];
for(var i=0;i<10;i++){
    var a = document.createElement('button');
    a.innerHTML=i+1;
    //arry.push(button);
    container.append(a);
    arry.push(a);
}
var c=document.createElement("button")
    c.innerHTML="Last"
    c.onclick=function(){
        tbody.innerHTML=""
        for(let i=90;i<100;i++)
        {
            var tr = document.createElement('tr');
            var td1= document.createElement('td');
            td1.innerHTML=data[i].id;
            var td2= document.createElement('td');
            td2.innerHTML=data[i].name;
            var td3= document.createElement('td');
            td3.innerHTML=data[i].email;
            tr.append(td1,td2,td3);
            tbody.append(tr);
        }
    }
    container.append(c)

arry.forEach(ele=>{ 
   ele.onclick=function(){

   
    pagination(ele.innerHTML);
   }
   }) 
}
