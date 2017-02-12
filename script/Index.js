var Main = (function() {
	var listContacts = new ListContacts("Contacts/list.json");
	var list = listContacts.getListContacts(callback);
	console.log(listContacts.srcList);
	function callback(result) {
        listContacts.setAttrsContact(result);   
    }
}());