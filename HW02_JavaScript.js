$("document").ready(function () {
    console.log( "ready!");
    console.log(movies);

    var movieTitle = $(movies.Title);
    var movieDescrip = $(movies.Description);
    var moviePrice = $(movies.price);
    var movieDirector = $(movies.Director);
    var movieReleaseyear = $(movies.Releaseyear);
    var movieRuntime = $(movies.Runtime);
    var movieimage = $(movies.imgscr).toString();
    
//for each element in data array
    $.each(movies, function(){
        var AddedData = `<div class='col-sm-3'>
        <div class='card' style='width: 18rem;'>
           <img class='card-img-top' src='`+ movieimage +`' alt='Card image cap'>` +
           `<div class='card-body'>
               <h5 class='card-title'>"`+ movieTitle +`</h5>` + //insert movie tartle 
                `<p class='card-text'>`+ movieDescrip +`</p>` + //insert description
                `<p class='card-text float-right'>`+ moviePrice +`</p>` + //insert price
                `<a class='btn btn-primary' id='showDetails'>Show Details</a>`  +
                `<a class='btn btn-primary' id='BookTicket'>Book Ticket</a>`  +
            `</div>` +
            `</div>` +
            `</div>`;

    $("#moviecards").append(AddedData);
    });

//click show details
    $("#showDetails").click(function(){
        $(this).closest("#thisTitle").append(movieTitle);
        $(this).closest("#thisDirector").append(movieDirector);
        $(this).closest("#thisReleaseYear").append(movieReleaseyear);
        $(this).closest("#thisRunTime").append(movieRuntime);

        $("#myModal").modal('show');

    });
//go to cart page
    $("#BookTicket").click(function(){
        
        $("#cartno").append();
        //add item to cart
        
  });

//cart table empty defualt
//cart add
//cart delete

});

//var url = "HW02_cart.html";
//$(location).attr('href',url);