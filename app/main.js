 window.addEventListener ( 'load', () => {
    fetch('https://mars-weather-rems.netlify.app/rems.json')
    .then(res => res.json())
    .then(res => {
        let pre = document.getElementById("numpresion");
        let item1= `${res.weather_report.magnitudes[0].pressure}Pa`
        pre.innerHTML += item1;
        

        //fecha tierra

        let tierra = document.getElementById("marcarfecha");
        let item2= `${res.weather_report.terrestrial_date[0]}`   
        tierra.innerHTML += item2;

        //soles
        let sol = document.getElementById("soles");
        let item3= `${res.weather_report.sol[0]} Soles `   
        sol.innerHTML += item3;

        //aire
        let mina = document.getElementById("minaire");
        let item4= `${res.weather_report.magnitudes[0].min_temp}ºC`   
        mina.innerHTML += item4;

        let maxa = document.getElementById("maxaire");
        let item5= `${res.weather_report.magnitudes[0].max_temp}ºC`  
        maxa.innerHTML += item5;

        //suelo
        let mins = document.getElementById("minsuelo");
        let item6= `${res.weather_report.magnitudes[0].min_gts_temp}ºC`   
        mins.innerHTML += item6;

        let maxs = document.getElementById("maxsuelo");
        let item7= `${res.weather_report.magnitudes[0].max_gts_temp}ºC`   
        maxs.innerHTML += item7;

         //iconos

         let iconos = document.getElementById("iconos");
         let item8= `${res.weather_report.magnitudes[0].atmo_opacity}</span></li>`;
 
         if (res.weather_report.magnitudes[0].atmo_opacity == "Sunny" ) {
             let sunny = `<span class="fa fa-sun-o"></span>`;
             iconos.innerHTML += sunny;
         } 
         if (res.weather_report.magnitudes[0].atmo_opacity ==  "Cloudy" ) {
             let cloudy = `<span class="fa fa-cloud"></span>`;
             iconos.innerHTML += cloudy;
         } 
         if (res.weather_report.magnitudes[0].atmo_opacity ==  "Storm" ) {
             let cloudy = `<span class="fa fa-bolt"></span>`;
             iconos.innerHTML += cloudy;
         } 
    
    });


    /** Crear / conectar bbdd */
    let db = new PouchDB('datos');

    /** Pintar la lista de usuarios 
    renderDatos();*/
    
    /** Escuechar eventos de los botones */
    let btnAdd = document.querySelector("#fa-plus");
    btnAdd.addEventListener("click", addDatos, false);
    

    /** Función para añadir usuarios */
    function addDatos(){

        // Añadir registro a la BBDD
        let doc = {
            "_id": `temp-${Math.floor(Math.random() * 10000000)}`,
            "marcarfecha": marcarfecha.innerHTML,     
            "minaire":minaire.innerHTML,        
            "maxaire": maxaire.innerHTML ,
            "numpresion": numpresion.innerHTML,
            "minsuelo":minsuelo.innerHTML,        
            "maxsuelo": maxsuelo.innerHTML 

            
            };            
        db.put(doc);     
            

    }
       
});














