let mixerPortfolio = mixitup (' .work-container' ,{
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});


/*

const linkwork = document.querySelectorAll(".work-item")


function activework(){
    
    console.log("activework function called");
    linkwork.forEach (l => l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkwork.forEach(l => l.addEventListener("click", 'activework'));

*/


document.addEventListener("DOMContentLoaded", function() {
    const linkwork = document.querySelectorAll(".work-item");

    function activework() {
        console.log("activework function called");
        linkwork.forEach(l => l.classList.remove("active-work"));
        this.classList.add("active-work");
    }

    linkwork.forEach(l => l.addEventListener("click", activework));
});

document.addEventListener("click", (e) => {

    if(e.target.classList.contains("work-button")) {
         togglePortfolioPopup();
         portfolioItemDetails(e.target.parentElement);

    }
})

function togglePortfolioPopup() {
    document.querySelector(" .portfolio_popup").classList.toggle("open");

}

document.querySelector(" .portfolio_popup-close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem) {

    console.log(portfolioItem)





    document.querySelector(" .pp_thumbnail img").src = portfolioItem.querySelector(".work-img").src;
   

    var detailsDescription = document.querySelector(".portfolio_popup-info .details_description");
    var detailsInfo = document.querySelector(".portfolio_popup-info .details_info");

    
    detailsTitle.innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    detailsDescription.innerHTML = portfolioItem.querySelector(".details_description").innerHTML;

    // Assuming details_info is an unordered list, you may want to update this part accordingly
    detailsInfo.innerHTML = portfolioItem.querySelector(".details_info").innerHTML;




    /*

    document.querySelector(".details_title").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".details_description").innerHTML = portfolioItem.querySelector(".details_description").innerHTML;
    document.querySelector(".details_info").innerHTML = portfolioItem.querySelector(".details_info").innerHTML;
    

    */

    /*

    var detailsTitle = document.querySelector(".details_title");
    var detailsDescription = document.querySelector(".details_description");
    var detailsInfo = document.querySelector(".details_info");

    
    detailsTitle.innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    detailsDescription.innerHTML = portfolioItem.querySelector(".details_description").innerHTML;

    // Assuming details_info is an unordered list, you may want to update this part accordingly
    detailsInfo.innerHTML = portfolioItem.querySelector(".details_info").innerHTML;

    */

}





