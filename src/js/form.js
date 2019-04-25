(function($) {
    "use strict"
    $(function() {

        $('.field_cancel').on('click', function() {
            var id = $(this).data('field')
            $('input[data-fieldname="' + id + '"]').val('')
        })

        $('form').parsley()

    })
})(jQuery);