$("document").ready(function () {
    console.log( "ready!");
    console.log(movies);

    var movieTitle = $(movies.Title).val();
    var movieDescrip = $(movies.Description).val();
    var moviePrice = $(movies.price).val();
    var movieDirector = $(movies.Director).val();
    var movieReleaseyear = $(movies.Releaseyear).val();
    var movieRuntime = $(movies.Runtime).val();
    var movieimage = $(movies.imgscr).val();
    
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
    $("#showDetails").click(function(e){
        $(this).closest("#thisTitle").append(movieTitle);
        $(this).closest("#thisDirector").append(movieDirector);
        $(this).closest("#thisReleaseYear").append(movieReleaseyear);
        $(this).closest("#thisRunTime").append(movieRuntime);

        $("#myModal").modal('show');
        console.log(e);
    });

//cart table empty defualt
//cart add
//cart delete

});