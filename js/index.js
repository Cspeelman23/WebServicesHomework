console.log("I am here");

function getFarenheitTemp(temp){
      return (9*temp/5)+32;
    };

function length(obj) {
        return Object.keys(obj).length;
    };

$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    //var latitude= 0;
    //var longitude= 0;
    //var capital = "string"
    var state_obj = state_info['CO'];
    var state_name = "AL";
    var states50 = length(state_info);
    console.log("this should be 50: " + states50);
    // Object.keys(state_obj).map(function(key, index) {
    //     if(key=="lat"){
    //         latitude = state_obj[key];
    //     }else if(key=="lng"){
    //         longitude = state_obj[key];
    //     }else  if(key=="capital"){
    //         capital = state_obj[key];
    //     }
    // });

    state_name= Object.keys(state_info);
    console.log("name:  "+ state_name) ;
    
    for (var i=0; i<states50; i++) {
        state_obj = state_info[state_name[i]];
        console.log(`state_name:` + state_name[i]);
       // console.log(`state_obj capital: ${state_obj.capital}`);
        
        var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${state_obj.lat},${state_obj.lng};`

        $.ajax({url:url, dataType:"jsonp", initI: i}).then(function(data) {
                    i=this.initI; //reinstating the correct i val--------------https://dariancabot.com/2010/11/09/jquery-using-ajax-inside-a-loop-and-variable-scope/
                    //console.log(data)
                    
                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                    var temperature =  Math.round(getFarenheitTemp(data.current.temperature));
                    
                    //TODO
                    var stateId = "#" + state_name[i];
                    console.log(stateId);
                    console.log(temperature)
                    // Create a series of if else blocks to set the color for the state based on the temperature
                    if(temperature<=10){
                        $(stateId).css('fill', "#6495ED");
                    }else if(temperature>=11 && temperature<=20){
                        $(stateId).css('fill', "#7FFFD4");
                    }else if(temperature>=21 && temperature<=30){
                        $(stateId).css('fill', "#0000FF");
                    }else if(temperature>=31 && temperature<=40){
                        $(stateId).css('fill', "#008B8B");
                    }else if(temperature>=41 && temperature<=50){
                        $(stateId).css('fill', "#00BFFF");
                    }else if(temperature>=51 && temperature<=60){
                        $(stateId).css('fill', "#F08080");
                    }else if(temperature>=61 && temperature<=70){
                        $(stateId).css('fill', "#CD5C5C");
                    }else if(temperature>=71 && temperature<=80){
                        $(stateId).css('fill', "#8B0000");
                    }else if(temperature>=81 && temperature<=90){
                        $(stateId).css('fill', "#B22222");
                    }else if(temperature>=91){
                        $(stateId).css('fill', "#FF0000");
                    }else{
                        $(stateId).css('fill', "grey");
                    }

                  
        });
    }
});
