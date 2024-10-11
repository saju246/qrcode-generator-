$('#generate').click(function(){
    let url = $('#url').val();
    $('#qrcode').empty();
    let qrcode = new QRCode(document.getElementById('qrcode'),{
        text:url,
        width:128,
        height:128
    })
})