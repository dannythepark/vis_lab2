
// TODO: load the dataset 

let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log(attractions)
		filterData();		

function filterData(category) {
	let filtered = attractions; 
	console.log(filtered)
	if (category && category != "all"){
		 filtered = filtered.filter(function(row,index){
			 return row.Category == category;
		 });
	}
	const descending_sorted = filtered.sort(function(a,b){
		return b.Visitors - a.Visitors;
	});

	let top_five = descending_sorted.slice(0,5);

	renderBarChart(top_five)


	///attractions.sort((a, b) => (a.Visitors < b.Visitors ? 1 : -1));
	//attractions = category.slice(0,5);
	//console.log("top 5 attractions by Visitors : ");
	//console.log(attractions)
}
// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

document.querySelector("#attraction-category").addEventListener("change", function (event){
	filterData(event.target.value);
})
  });
