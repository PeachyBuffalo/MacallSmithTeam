<?php
/**
 * Template part for displaying testimonials
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
?>

<section id="testimonials" class="testimonials">
    <div class="container">
        <h2><?php echo esc_html(get_theme_mod('testimonials_title', 'What Our Clients Say')); ?></h2>
        
        <div class="testimonials-grid">
            <?php
            $testimonials = json_decode(get_theme_mod('testimonials_list', '[]'), true);
            if (!is_array($testimonials)) {
                $testimonials = array(
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
                );
            }

            foreach ($testimonials as $testimonial) :
            ?>
                <div class="testimonial-item">
                    <blockquote>
                        <?php echo wp_kses(wpautop($testimonial['content']), array(
                            'p' => array(),
                            'br' => array(),
                            'strong' => array(),
                            'em' => array()
                        )); ?>
                    </blockquote>
                    <cite>- <?php echo esc_html($testimonial['author']); ?></cite>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
