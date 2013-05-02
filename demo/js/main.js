$(function() {
    // Welcome to the console
    console.log('-------------------------------------------------------------');
    console.log('Welcome to the JavaScript demo!');
    console.log('-------------------------------------------------------------');

    $('.code .content').each(function() {
        CodeMirror.fromTextArea(this, {
            mode: "javascript"
        });
    });

    // Run arbitrary bits of code in the console
    $('.run').each(function() {
        $(this).click(function() {
            var editor = $(this).parents('.code').find('.CodeMirror').get(0).CodeMirror;
            var code = editor.getValue();
            eval(code);
            return false;
        });
    });

});
