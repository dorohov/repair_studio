(function($) {
    "use strict"
    $(function() {

        $('.field_cancel').on('click', function() {
            var id = $(this).data('field')
            $('input[data-fieldname="' + id + '"]').val('')
        })

        $('form').parsley()

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var aid = $(this).attr("href");
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
        })

        $('.form form').submit(function(e) {
            e.preventDefault()
            
            //---------------
            // ajax
            //---------------
            $('#form_modal').modal()            
        })

        $('.catalog__card__link a').on('click', function(e) {
            e.preventDefault()
            var productName = $(this).data('product')
            productName = productName.replace('<br>', '').replace(/\s+/g, ' ').trim()
            $('.modal #productName').val(productName)
            $('#product_modal').modal()     
        })

    })
})(jQuery);