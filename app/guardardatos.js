window.onload = function() {
  

    let db = new PouchDB('datos');


         /** Función para pintar la lista de usuarios */
    function renderDatos(){
        let saved = document.querySelector(".datossaved");
        saved.innerHTML = "<h2></h2>";


        //Retrieving all the documents in PouchDB
        db.allDocs({include_docs: true}, function(err, docs) {
            if (err) {
                return console.log(err);
            } else {                
                datos = docs.rows;
                
                datos.forEach(magnitudes => {
                    console.log(magnitudes);
                    let dato = `
                                <article class="magnitud">
                                    <div>${magnitudes.doc.marcarfecha}</div>
                                    <div>${magnitudes.doc._id}</div>
                                    <div>${magnitudes.doc.minaire}</div>
                                    <div>${magnitudes.doc.maxaire}</div>
                                    <div>${magnitudes.doc.numpresion}</div>
                                    <div>${magnitudes.doc.minsuelo}</div>
                                    <div>${magnitudes.doc.maxsuelo}</div>
                                    <div class="borrar"><span class="fa fa-trash"></span></div>
                                </article>`;
                    saved.innerHTML += dato;
                });
                
            }
        });
    }
    renderDatos();

    const borrar = () => {

        const borrardato = document.querySelectorAll('.datossaved');
    
        borrardato.forEach((magnitud, i) => {

            const eliminar = magnitud.querySelector('.borrar .fa-trash');
            eliminar.addEventListener('click', () => {
            
               dato.splice(i, 1);
                renderDatos();
            });
    
            
        });
       
    
    };
    borrar();


/**     function BorrarD() {

        const borrar= document.querySelector('.borrar .fa-trash');
        borrar.addEventListener('click', () => {
            let eliminar = document.querySelector('.datossaved');
            eliminar.innerHTML = 'hola';



        });
    };
    BorrarD();*/

    
   
    
};
//var db = new PouchDB('my_database');
/**const borrar = () => {

    const borrardato = document.querySelectorAll('.magnitud');

    borrardato.forEach((magnitud, i) => {
        const borrar = magnitud.querySelector('.borrar .fa-trash');
        borrar.addEventListener('click', () => {
        
           dato.splice(i, 1);
            renderDatos();
        });

        
    });
   

};
borrar();

/**const borrar = () => {

    const borrardato = document.querySelectorAll('.magnitud');

    borrardato.forEach((magnitud, i) => {
        const borrar = magnitud.querySelector('.borrar .fa-trash');
        borrar.addEventListener('click', () => {
        
           dato.remove('');
        });

        
    });
   

};
borrar();*/



    