//botones
$('.descargar-Cv').on('click', function(){
    const downloadFile = document.createElement('a');
    downloadFile.href = 'files/CV-Daniela-Nuno.pdf';
    downloadFile.target = '_blank';
})