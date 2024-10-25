function macall_smith_customize_register($wp_customize) {
    // Testimonials Section
    $wp_customize->add_section('testimonials_section', array(
        'title' => __('Testimonials', 'macall-smith'),
        'priority' => 30,
    ));

    // Testimonials Title
    $wp_customize->add_setting('testimonials_title', array(
        'default' => 'What Our Clients Say',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('testimonials_title', array(
        'label' => __('Testimonials Title', 'macall-smith'),
        'section' => 'testimonials_section',
        'type' => 'text',
    ));

    // Testimonials List
    $wp_customize->add_setting('testimonials_list', array(
        'default' => array(
            array(
                'content' => "Macall's expertise made our home buying process smooth and stress-free. Highly recommended!",
                'author' => "Sarah J."
            ),
            array(
                'content' => "As a military family, Macall's understanding of our unique needs was invaluable during our relocation.",
                'author' => "Mike and Lisa T."
            ),
            array(
                'content' => "Macall's insights into the local market helped us find the perfect investment property.",
                'author' => "David R."
            )
        ),
        'sanitize_callback' => 'macall_smith_sanitize_testimonials',
    ));

    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'testimonials_list',
        array(
            'label' => __('Testimonials', 'macall-smith'),
            'section' => 'testimonials_section',
            'type' => 'textarea',
            'description' => __('Enter testimonials in JSON format. Example: [{"content":"Testimonial text","author":"Author Name"}]', 'macall-smith'),
        )
    ));
}
add_action('customize_register', 'macall_smith_customize_register');

// Sanitize function for testimonials
function macall_smith_sanitize_testimonials($input) {
    $valid_testimonials = array();
    $testimonials = json_decode($input, true);
    
    if (!empty($testimonials) && is_array($testimonials)) {
        foreach ($testimonials as $testimonial) {
            if (!empty($testimonial['content']) && !empty($testimonial['author'])) {
                $valid_testimonials[] = array(
                    'content' => sanitize_text_field($testimonial['content']),
                    'author' => sanitize_text_field($testimonial['author'])
                );
            }
        }
    }
    
    return $valid_testimonials;
}
