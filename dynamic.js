function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function () {
    if (xhr.readyState === 4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  edu(data.edu);
  Skills(data.Skills);
  hobbies(data.hobbies);
})
var left=document.querySelector(".left");
function profile(p) {
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var h3=document.createElement("h2")
  h3.textContent=p.desig;
  left.append(h3);
  var h4=document.createElement("h4")
  h4.textContent=p.email;
  left.append(h4);
  var h5=document.createElement("h4")
  h5.textContent=p.mobile;
  left.append(h5);
}
var right=document.querySelector(".right");
function career(c){
  var h1=document.createElement("h2");
  h1.textContent="Career Objective";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var c1=document.createElement("p");
  c1.textContent=c.info;
  right.append(c1);
}
function edu(e) {
  var h1=document.createElement("h2");
  h1.textContent="Education Details";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  right.append(table);
  var tr1="<tr><th>s_no</th><th>insti</th><th>quali</th><th>per</th><th>yop</th>";
  var tr2="";
  for(i=0;i<e.length;i++)
  {
    tr2=tr2+"<tr><td>"+e[i].s_no+"</td><td>"+e[i].insti+"</td><td>"+e[i].quali+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td>";

  }
  table.innerHTML=tr1+tr2;
  right.append(table);
}
function Skills(s) {
  var h1=document.createElement("h2");
  h1.textContent="Skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ol=document.createElement("li");
  ol.textContent=s.s1;
  right.append(ol);
  var ol2=document.createElement("li");
  ol2.textContent=s.s2;
  right.append(ol2);
  var ol3=document.createElement("li");
  ol3.textContent=s.s3;
  right.append(ol3);
}
function hobbies(h){
  var h1=document.createElement("h2");
  h1.textContent="Hobbies";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ol=document.createElement("li");
  ol.textContent=h.h1;
  right.append(ol);
  var ol2=document.createElement("li");
  ol2.textContent=h.h2;
  right.append(ol2);
  var ol3=document.createElement("li");
  ol3.textContent=h.h3;
  right.append(ol3);
}
