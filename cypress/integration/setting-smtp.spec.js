describe( "Setting/SMTP Page Test", function () {
	//it should visit setting/smtp page
	it( "Visits the Setting/SMTP Page", function () { } );

	//it should test if form is empty then form submit button must be disable
	it( "Test smtp Form With Empty Data", function () { } );

	//it should test, user name field, email field, password field, smtp server field, server port field are required and valid, if any of these field is not valid submit button must be disabled 
	it( "Test smtp Form With Wrong Data", function () { } );

	//it should test, if we provide right data but with wrong credential, submit button must be enable and if click submit it should give error on ui 
	it( "Test smtp Form With Right Data with wrong credetial", function () { } );

	//it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving success , so data must be added in smtp table, if any error show it to user (like same smtp if already added, if any), and this smtp must be status inactive by default
	it( "Test smtp Form With Right Data", function () { } );

	//find number of records in smtp table if there is only one record with diactive status, test remove button not be disable. Change status diactive to active , if api response success remove button must be disable
	it( "Test smtp Table With Single Data active/diactive status", function () { } );

	//test active status record not be deleted
	it( "Test active status record not be deleted", function () { } );
        
	//test deactive status record can be deleted
	it( "Test deactive status record can be deleted", function () { } );

	//test if number of record are more than 1, only 1 record can be activated at a time. Click to a deactive record to make  it active and test all other record must be deactivated.
	it( "Test only a single record can be activated", function () { } );

	//test any active record, fire api to test record
	it( "Test a smtp record", function () { } );
} );