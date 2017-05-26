(function($) {
    // Initial check
    if( $('.cmb-tabs').length ) {
        $('.cmb-tabs').each(function() {
            // Activate first tab
            if( ! $(this).find('.cmb-tab.active').length ) {
                $(this).find('.cmb-tab').first().addClass('active');

                $($(this).find('.cmb-tab').first().data('fields')).addClass('cmb-tab-active-item');
            }
        });
    }

    $('body').on('click.cmbTabs', '.cmb-tabs .cmb-tab', function(e) {
        var tab = $(this);

        if( ! tab.hasClass('active') ) {
            var tabs = tab.closest('.cmb-tabs');
            var form = tabs.next('.cmb2-wrap');


            // Hide current active tab fields
            form.find(tabs.find('.cmb-tab.active').data('fields')).fadeOut('fast', function() {
                $(this).removeClass('cmb-tab-active-item');

                form.find(tab.data('fields')).fadeIn('fast', function() {
                    $(this).addClass('cmb-tab-active-item');
                });
            });

            // Update tab active class
            tabs.find('.cmb-tab.active').removeClass('active');
            tab.addClass('active');
        }
    });
})(jQuery);