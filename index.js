// logic to select the all the data group
		function SelectALL(source) {


		  let checkboxes = document.getElementsByName('dataGroup');


		  for(let i=0, n=checkboxes.length;i<n;i++) {
			checkboxes[i].checked = source.checked;


		  }
		}
	