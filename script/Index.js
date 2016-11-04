$(document).ready(function(){
    var listContacts = new ListContacts("../Contacts/list.json");
    listContacts.getListContacts();
});