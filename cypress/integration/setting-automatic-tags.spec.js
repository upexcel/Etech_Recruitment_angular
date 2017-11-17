describe( "Setting/AutomaticTag Setting Page Test", function () {

	//it should visit setting/AutomaticTag seting page, page have option to add automatic tag
	it( "Visits the Setting/AutomaticTag Setting Page, check page options", function () { } );

	//if user click on add tag button from page it should open a Add tag pop up with a form. if user click on close button
	//this popus must be closed and automatic tag list remain same
	it( "test add tag button and close button functionality", function () { } );

	//check if form is invalid save button must be disable
	it( "check add button validation", function () { } );

	//check if user enable 'send automatic email' or 'assign to all exiting emails' it should be enable
	it( "test \"send automatic email\" or \"assign to all exiting emails\" option functionality", function () { } );

	//there should be a option to select tag color with pre-define color list, if user click on any color from list, the selected color will be same
	it( "test select tag color functionality", function () { } );

	//if user fill title and subject and click on save button it should added a tag and popup will close and lis of automatic tag will be update
	it( "check add button with valid form data", function () { } );

	//after adding automatic tag , go to inbox page and check last added tag must be there
	it( "test inbox page tags with last added tag", function () { } );

	//in every automatic tag have a option to delete button, if user click on delete button automatic tag list,
	//it should open a confirm popup and user, it have 2 option 'yes' and 'no' buttons, if user click on 'no' popup will close
	// and automatic tag list should be remain same, or if user hit yes automatic tag should be deleted and automatic tag list should be updated
	it( "test automatic tag delete functionality", function () { } );

	//after deleting automatic tag , go to inbox page and check last added tag must be deleted there
	it( "test inbox page tags with last deleted tag", function () { } );

} );