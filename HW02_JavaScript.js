$("document").ready(function () {
 
    console.log( "ready!");
    console.log(movies[0].Title);
    
//for each element in data array
    for(let i=0; i < movies.length; i++){
        var AddedData = `<div class='col-sm-3'>
        <div class='card' style='width: 18rem;'>
           <img class='card-img-top' id='moviename' src='`+ movies[i].imgscr +`' style='width:160px; height:200px' alt='Card image cap'>` +
           `<div class='card-body'>
               <h5 class='card-title'>`+ movies[i].Title +`</h5>` + //insert movie tartle 
                `<p class='card-text'>`+ movies[i].Description +`</p>` + //insert description
                `<p class='card-text float-right'>`+ movies[i].price +`</p>` + //insert price
                `<a class='btn btn-primary' data-toggle='modal' data-target='#myModal' style='margin-bottom: 20px;'>Show details</a> 
                <a class='btn btn-primary' id='BookTicket'>Book Ticket</a>`  +
            `</div>` +
            `</div>` +
            `</div>`;

    $("#moviecards").append(AddedData);
    };


    //show details modal
        $("ShowDetails").click(function(){
            //append details
            $("#modalTitle").append(movies[i].Title);
            $("#modalDirector").append(movies[i].Director);
            $("#modalYear").append(movies[i].Releaseyear);
            $("#modalRuntime").append(movies[i].Runtime);        
    });

    //adding to cart 
    $("BookTicket").click(function(){
        //foreach click add to cart number 

        //add info to local storage

    });

    //if cart length == 0 message "No movies in your cart"
    
    //get info from local storage 

    //foreach element in local storage add a table row with x-button, movie name, price, decrease butoon, number, increase button and total cost

    //work out total cart cost
});
