$(document).ready(function () {
	console.log('Document is ready!');

	const whiteBoxes = document.getElementsByClassName('whiteBox');
	const img = document.querySelector('.imgBox');

	$(img).on('dragstart', function (event) {
		event.target.className += ' dragging'

		// setTimeout(() => { 
		// 	$(img).hide();
		// }, 0);
	});

	$(img).on('dragend', function (event) {
		event.target.className = 'imgBox';
	});

	for (let whiteBox of whiteBoxes) {
		$(whiteBox).on('dragover', function (event) {
			event.preventDefault();
		});

		$(whiteBox).on('drop', function (event) {
			event.target.append(img);
		});
	};
});
