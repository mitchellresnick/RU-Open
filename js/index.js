var index;

function onLoad(){
  console.log("Loading");
  $.getJSON('http://parsonssoftware.me/RU-Open/data.json', function(data) {
        index = new Page(data);
  });
  $("*").css( 'cursor', 'pointer' );
  for (var i = 0; i < 5; i++){
    var div = document.getElementById('camp' + i);
    div.style.display = 'none';
    for(var j = 1; j < 11; j++){
      var sec = document.createElement("SECTION");
      sec.innerHTML = '&emsp;Test' + j;
      div.append(sec);
    }
  }
}

function onCampusClick(pos){
  var campus = event.target || event.srcElement;
  campus.style.color = (index.selectedCampuses[pos] ? "" : "green");
  document.getElementById('camp' + pos).style.display = (index.selectedCampuses[pos] ? "none" : '');
  index.selectedCampuses[pos] = !index.selectedCampuses[pos];
}

class Page{
  constructor(json){
    // Stores JSON data
    this.data = json;
    console.log(json.BUSCH.WL["165"]);
    this.selectedCampuses = [];
    for (var i = 0; i < 5; i++) this.selectedCampuses[i] = false;
  }
}

class Campus{
  constructor(name){
    // Campus Name (Livi, College Ave, etc.)
    this.name = name;
    // Is campus used in search
    this.selected = false;
  }

}

class Building{
  constructor(name){
    // Building Name (Hill Center, Loree, etc)
    this.name = name;
    // Is Building included in search
    this.selected = true;
  }
}
