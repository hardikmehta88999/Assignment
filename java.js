var btns=document.querySelectorAll('#movie-list .delete');
btns.forEach(function(btn)
{
btn.addEventListener('click',function(e)
{
const li=e.target.parentElement;
li.parentNode.removeChild(li)
});
});

var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function(e){
if(e.target.className === 'delete'){              console.log(e.target);
const li = e.target.parentElement;
console.log(li);
li.parentNode.removeChild(li);
list.removeChild(li);
  }
})

const addForm = document.forms['add-movie'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;
  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var deleteBtn = document.createElement('span');
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  deleteBtn.textContent =  'delete';
  movieName.textContent = value;
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');
})

//to hide movie list
function showMe(i,b) {
  if(b.checked == true)
  {
    document.getElementById(i).style.display ="none";
  }
  else{
  document.getElementById(i).style.display ="block"
  }
}
//to search the list element
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
