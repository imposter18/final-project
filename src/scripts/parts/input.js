export default function inputCheck(){
    $('#group input:checkbox').click(function(){
      if ($(this).is(':checked')) {
         $('#group input:checkbox').not(this).prop('checked', false);
      }
    });
    $('#group-checkbox input:checkbox').click(function(){
      if ($(this).is(':checked')) {
         $('#group-checkbox input:checkbox').not(this).prop('checked', false);
      }
    });
  }
   