//Set Windows to be draggable and resizeable
$('#filesWindow')
  .resizable()
  .draggable();
$('#textEditorWindow')
  .resizable()
  .draggable();

//Hide windows on start
//$('#filesWindow').toggle(100);
//$('#textEditorWindow').toggle(100);

//Disable draggable so the click functions work
$('#filesWindow').draggable('disable');
$('#textEditorWindow').draggable('disable');

//enable/diable draggable by clicking title bar
$('#filesTitle').mouseup(function() {
  $('#filesWindow').draggable('disable');
});

$('#filesTitle').mousedown(function() {
  $('#filesWindow').draggable('enable');
});

$('#textEditorTitle').mouseup(function() {
  $('#textEditorWindow').draggable('disable');
});

$('#textEditorTitle').mousedown(function() {
  $('#textEditorWindow').draggable('enable');
});

//Toggle windows
function toggleFilesWindow() {
  $('#filesWindow').toggle(100);
}

function toggleTextEditorWindow() {
  $('#textEditorWindow').toggle(100);
}
