/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2022-09-05 17:40:06 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2022-09-05 17:40:06 
 */


//Hamburgermeny
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {});
});

//Selectbox
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});

//Collapsible
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});