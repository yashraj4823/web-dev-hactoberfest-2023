document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            // Handle the JSON data
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    // Function to display JSON data on the webpage
    function displayData(data) {
        const jsonDataDiv = document.querySelector(".content-part div");
    
        
        data.forEach(item => {
            const div = document.createElement('div');
         div.style.background=item.background;
            const h3Color = item.color; // Assuming your data includes a 'color' property
     
            div.innerHTML = `
                <div class="scores">
                    <img src="${item.icon}" alt="${item.category}">
                    <h3 style="color: ${h3Color}">${item.category}</h3>
                </div>
                <p><span>${item.score}</span> / 100</p>
            `;
            
            jsonDataDiv.appendChild(div);
        });
    }

})