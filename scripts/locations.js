var locations = [
	{
		city: "Montreal",
    phone: "343-494-4930",
		address: "45 Dorchester Blvd"
	},
	{
		city: "Trois-Rivieres",
    phone: "338-494-4530",
		address: "34 Boulevard des Forges"
	},
	{
		city: "Ottawa",
    phone: "613-494-4630",
		address: "63 Meadowlands Dr E"
	},
	{
		city: "Barrie",
    phone: "289-494-4830",
		address: "78 Bradford St"
	},
	{
		city: "Toronto",
    phone: "416-494-4430",
		address: "500 Yonge St"
	},
]
function getLocations(arr) {
	let l1 = [];
	for (i = 0; i < locations.length; i++){
		l1.push(locations[i]);
	}
	l1.sort(compare);
	return l1;
}

function compare(a, b) {
  if (a.city < b.city){
    return -1;
  }
  if (a.city > b.city){
    return 1;
  }
  return 0;
}
