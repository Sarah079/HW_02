$("document").ready(function () {
    console.log( "ready!");
    console.log(movies);

    var movieTitle = $(movies.Title).text();
    var movieDescrip = $(movies.Description).text();
    var moviePrice = $(movies.price).text();
    var movieDirector = $(movies.Director).text();
    var movieReleaseyear = $(movies.Releaseyear).text();
    var movieRuntime = $(movies.Runtime).text();
    var movieimage = $(movies.imgscr).text();
    
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
var i = 0;
    $("#BookTicket").click(function(){
        //increase cart number
        let cartnumber = i + 1;
        i = cartnumber;
        console.log(cartnumber);
        $("#cartno").show(cartnumber);

        //total cost 
        let thismovieprice = $(this).closest(moviePrice);
        $.each("<td>", function(){
            var moviecost = cartnumber*thismovieprice;
            var total = moviecost.sum();
        });
        //add item to cart
        var carttable = `<tr>`+ 
        `<td><i class="fa-solid fa-circle-xmark"></i></td>`+
        `<td>`+ thismovieprice +`</td>`+
        `<td><i class='fa-solid fa-circle-minus id='minusquantity''></i>`+ cartnumber +`<i class='fa-solid fa-circle-plus' id='addquantity'></i></td>`+
        `<td>R`+ moviecost +`</td>`+
        `</tr>`;
        $("carttable").append(carttable);

        //total
        var addtototal = `<td></td><td></td><td></td><td>`+ total +`</td>`;
  });

//cart table empty defualt
//cart add
//cart delete

});

//var url = "HW02_cart.html";
//$(location).attr('href',url);