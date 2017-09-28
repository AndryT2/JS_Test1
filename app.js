 var autocomplete = new google.maps.places.Autocomplete(
     /** @type {!HTMLInputElement} */
     (document.getElementById('autocomplete')), {
         types: ['geocode']
     });
 autocomplete.addListener('place_changed', loadPhones);

 function loadPhones(a) {
     var place = autocomplete.getPlace();
     var lat = place.geometry.location.lat();
     var lng = place.geometry.location.lng();
     $.ajax({
         type: "GET",
         url: "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&appid=f41e669ee8452730606f2416cb0e6773",
         success: function(data) {
             data.list.forEach(function(elem, i) {

                 var timeWeather = elem.dt_txt;
                 var tempWeather = elem.main.temp;
                 var typeWeather = elem.weather[0].main;
                 var descriptWeather = elem.weather[0].description;

                 $('table').append('<tr><td>' + timeWeather + '</td><td>' + tempWeather + '</td><td>' + typeWeather + '</td><td>' + descriptWeather + '</td></tr>')

             });
         }
     })
 }