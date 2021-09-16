
// TODO: load the dataset 

let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		filterData(attractions);
		//console.log('attractions - (a)', attractions);
		



function filterData(category) {
	console.log(category)
	category.sort((a, b) => (a.Visitors < b.Visitors ? 1 : -1));
	attractions = category.slice(0,5);
	console.log(attractions)
	renderBarChart(attractions)




}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

document.querySelector("#attraction-category").addEventListener("change", function (attractions){
	filterData(attractions.target.value);
})

  });