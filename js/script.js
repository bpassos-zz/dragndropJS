
var fras = document.querySelectorAll ('.frame');
	
[].forEach.call(fras, function(fra) {
	fra.addEventListener('dragstart', handleDragStart, false);
	fra.addEventListener('dragover', handleDragOver, false);
	fra.addEventListener('drop', handleDrop, false);

	function handleDragStart(e) {
		// Source is the element to be dragged.

		source = this;
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text', this.innerHTML);
		this.classList.add('wobble');
	}

	function handleDragOver(e) {
		// It is helpful to prevent browsers default, which usally results in unwanted redirect.
		if (e.preventDefault) {
			e.preventDefault();
		}
		this.classList.add('over');
		return false;
	}

	function handleDrop(e) {
		// Preventing browser default will help in this case with Firefox, which links to the image by default
		if (e.preventDefault) {
			e.preventDefault();
		}
		source.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text');
		this.classList.remove('over');
	}
	fra.addEventListener('drop', handleDrop, false);
	
	function handleDragLeave(e) {
		this.classList.remove('over'); // This / e.target is previous target element.
	}
	fra.addEventListener('dragleave', handleDragLeave, false);
	
	function handleDragEnd(e) {
		this.classList.remove('wobble');
	}
	fra.addEventListener('dragend', handleDragEnd, false);

});	
