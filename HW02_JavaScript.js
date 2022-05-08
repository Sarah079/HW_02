$("document").ready(function () {
 
    console.log( "ready!");
    console.log(movies[0].Title);
    
//for each element in data array
    for(let i=0; i < movies.length; i++){
        var AddedData = `<div class='col-sm-3'>
        <div class='card' style='width: 18rem;'id='`+ i +`'>
           <img class='card-img-top' src='`+ movies[i].imgscr +`' style='width:160px; height:200px' alt='Card image cap'>` +
           `<div class='card-body'>
               <h5 class='card-title' id='moviename'>`+ movies[i].Title +`</h5>` + //insert movie tartle 
                `<p class='card-text'>`+ movies[i].Description +`</p>` + //insert description
                `<p class='card-text float-right'>`+ movies[i].price +`</p>` + //insert price
                `<a class='btn btn-primary' data-toggle='modal' data-target='#myModal' id='ShowModal' style='margin-bottom: 20px;'>Show details</a> 
                <a class='btn btn-primary' id='BookTicket'>Book Ticket</a>`  +
            `</div>` +
            `</div>` +
            `</div>`;

    $("#moviecards").append(AddedData);
    };


    //show details modal
        $("#ShowModal").ready(function(){
            
            //get closest movie details
            var MTitle = this.closest(movies.Title);
            var MDirector = this.closest(movies.Director);
            var MReleaseYear = this.closest(movies.Releaseyear);
            var MRunTime = this.closest(movies.Runtime);

            //append details
            $("#modalTitle").append(MTitle);
            $("#modalDirector").append(MDirector);
            $("#modalYear").append(MReleaseYear);
            $("#modalRuntime").append(MRunTime);        
    });


    //book ticket function  
    $("#BookTicket").click(function(){
        //foreach click add to cart number 
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("cartno").innerHTML = localStorage.clickcount;

        //get closest movie details
            var BTitle = this.closest(movies.Title);
            var BPrice = this.closest(movies.price);
            let Bquantity = 1;
            let BCost = Math.round(Bquantity*BPrice);

        // table row with movie info
            var addtoTable = `<tr> 
            <td><i class='fa-solid fa-circle-xmark' id='deletemovie'></i>`+ BTitle + `</td>
            <td>`+ BPrice +`</td>
            <td><i class='fa-solid fa-circle-minus' id='minusmovie'></i>`+ Bquantity +` <i class='fa-solid fa-circle-plus' id='addmovie'></i></td>
            <td>R`+ BCost +`</td>
            </tr>`
            $("#carttable").append(addtoTable);  

        //add info to local storage    
          localStorage.setItem(BTitle,BPrice,Bquantity,BCost);
    });   

    //delete movie
    $("#deletemovie").click(function(){
        this.closest("<tr>").remove();
        localStorage.removeItem(); //not sure how to target specific movie
    });

    //remove movie quantity
    $("#minusmovie").click(function(){
        
        if (Bquantity == 1){
            this.closest("<tr>").remove();
            localStorage.removeItem(); //not sure how to target specific movie
        }
        else{
            var oldquantity =  this.closest("<tr>").localStorage.getItem(Bquantity);
            var newquantity = oldquantity - 1;
            return(newquantity);
        }
        

    });

     //add movie quantity
     $("#addmovie").click(function(){
        Bquantity ++;
        return(Bquantity);
    });

});
