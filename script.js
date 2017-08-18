 $(document).ready(function(){
 //alert("Movie database ! ");
 $.getJSON("https://api.themoviedb.org/3/movie/550?api_key=22d8568621673d1336e8d0d1fb253821",function(data){
  $.each(data.production_companies,function(key,value){
   console.log(key, value);
   //alert("Name = "+value.name);
   $("#prodCompanies").append("<li>"+value.name+"</li>");
  });
 });



  $.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
  $.each(data.results,function(key,value){
   console.log(data);
   $("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');
   
  });
  //$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+','+value.overview+'); return false;">' + value.title + '</a></li>');


