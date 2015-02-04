/**
 * Implements DrupalGap's template_info() hook.
 */
function studiogaptheme_info() {
  try {
    var theme = {
      name: 'studiogaptheme',
      regions: {
        header: {
          attributes: {
            'data-role': 'header',
            'data-theme': 'b',
            'data-position': 'fixed'
          }
        },
        sub_header: {
          attributes: {
            'data-role': 'header'
          }
        },
        navigation: {
          attributes: {
            'data-role': 'navbar'
          }
        },
        content: {
          attributes: {
            'class': 'ui-content',
            'role': 'main'
          }
        },
        footer: {
          attributes: {
            'data-role': 'footer',
            'data-theme': 'b',
            'data-position': 'fixed'
          }
        }
      }
    };
    return theme;
  }
  catch (error) { drupalgap_error(error); }
  console.log('Reading info file');
}
//Add css file for studiogaptheme
drupalgap_add_css('app/themes/studiogaptheme/studiogaptheme.css');

//Override the settings of menus.
drupalgap.settings.menus['user_menu_anonymous'].options = menu_slide_get_default_options('right');
drupalgap.settings.menus['user_menu_authenticated'].options = menu_slide_get_default_options('right');
drupalgap.settings.menus['main_menu'].options = menu_slide_get_default_options();

/**
 * Returns a JSON object that can be used as default options for a menu object.
 * @return {Object}
 */
function menu_slide_get_default_options(side) {
  side = side || "left";
  try {
    return {
      attributes: {
        'data-role': 'listview',
      },
      wrap: true,
      wrap_options: {
        attributes: {
          'data-role': 'panel',
          'data-position-fixed' : 'true',
          'data-theme' : 'b',
          'data-display' : 'overlay',
          'data-position' : side
        }
      }
    };
  }
  catch (error) { console.log('menu_popup_get_default_options - ' + error); }
}
