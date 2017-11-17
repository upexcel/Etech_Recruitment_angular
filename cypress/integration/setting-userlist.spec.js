describe( "Setting/User List Page Test", function () {

	//it should visit setting/userList page, page have option to add JobProfileTag tag
	it( "Visits the Setting/JobProfileTag Setting Page, check page options", function () { } );

	//check user list for login email, it should not be presented there
	it( "Check Loged In user\"s email, that should not be there", function () { } );

	//if user click on add user button from page it should open a Add New User pop up with a form. if user click on close button
	//this popus must be closed and user list remain same
	it( "test add user button and close button functionality", function () { } );

	//check if form is invalid save button must be disable
	it( "check add USER button validation", function () { } );

	//if user fill eamilId, select role, password and confirm password but form is still invalid
	//then save button must be disable
	it( "check add button with invalid form data", function () { } );

	//if user fill eamilId, select role, password and confirm password and form is valid then save button must be enable,
	// if user click add user button, it should close popup and add a user in user list with filled details 
	it( "check add button with valid form data, and user list", function () { } );

	//logout the current user, go to login page and login with latest added user, it should login
	it( "login with current added user", function () { } );

	//logout again and login with admin user togo userlist page,
	//in every user have a option to delete user, click on last added user's delete button,
	//it should open a confirm popup, it have 2 option 'yes' and 'no' buttons, if user click on 'no' popup will close
	// and user list should be remain same, or if user hit yes user should be deleted and user list should be updated
	it( "test user delete functionality", function () { } );

} );