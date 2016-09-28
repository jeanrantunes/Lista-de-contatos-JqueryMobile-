$(document).ready(function(){
	/*var list_contacts = $.parseJSON(list);
	$('h4').append(list_contacts[0].Email);
	$('img').attr('src', '../Contacts/'+list_contacts[0].Photo);*/
	/*$.getJSON("../Contacts/list.json", function(data){
            list = data;
        }).done(function(){
           $('h4').append(list[0].Name);
        }).fail(function(){
            $('h4').append("Not found!");
        });*/
    var listContacts = new ListContacts("../Contacts/list.json");
    listContacts.getListContacts(); 
});