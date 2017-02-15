function createPDF_(){
  var template = DriveApp.getFileById(DocumentApp.openByUrl( pdf_link).getId());
  var file = template.makeCopy("Group Information")
  Doc_Id= file.getId();
  DOC = DocumentApp.openById(Doc_Id);
  var body = DOC.getBody();
  
  body.replaceText("<group_name>", name);
  body.replaceText("<group_description>", description);
  body.replaceText("<group_email_address>", groupName+domain);
  body.replaceText("<valid_owners>", validOwners);
  body.replaceText("<valid_members>", validMembers);
  body.replaceText("<invalid_owners>", invalidOwners);
  body.replaceText("<invalid_members>",invalidMembers);
  DOC.saveAndClose();
  
  var options = {
    "noReply":true,
    "htmlBody": "<font face='calibri'>Your request to create a group has been processed.<br>Attached is a PDF with the information.<br>Please email us if you have any questions.</font><br><br><img width ='100' src = 'https://example123123456.files.wordpress.com/2016/07/screen-shot-2016-07-27-at-9-15-51-am.png'><br><b>&nbsp;&nbsp;Cloud Agile Systems Management Team</b><br>&nbsp;&nbsp;fit_casm@fordham.edu</font>",
    "attachments":DOC.getAs(MimeType.PDF)
  }
  GmailApp.sendEmail(respondentEmail, "Group Created", " ",options);
  GmailApp.sendEmail("******", "Group Created", " ",options);
  DriveApp.getFileById(Doc_Id).setTrashed(true);
}

function stringify_(arr){
  var str= "";
  for (var x = 0 ; x < arr.length; x++){
    str+=arr[x];
    if (x!=arr.length-1){
      str+="\n";
    }
  }

  if (str=="")
    str="-";
  return str;
}
