var Main = (function() {
	var listContacts = new ListContacts("Contacts/list.json");

	
	var list = listContacts.getListContacts(callback);
	function callback(result) {
        listContacts.setAttrsContact(result);   
    }
	//console.log(list);
}());