$(document).ready(function(){
	var list_contacts = $.parseJSON(list);
	$('h4').append(list_contacts[0].Email);
	$('img').attr('src', '../Contacts/'+list_contacts[0].Photo);
});