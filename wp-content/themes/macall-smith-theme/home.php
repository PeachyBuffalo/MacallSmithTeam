<?php
/*
Template Name: Home Page
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

get_header();
?>

<main id="primary" class="site-main">
    <!-- Hero Section -->
    <section class="hero" style="background-image: url('<?php echo esc_url(get_theme_file_uri('/images/hero-background.jpg')); ?>');">
        <div class="container">
            <h1><?php echo esc_html(get_theme_mod('hero_title', 'Your West Michigan Real Estate Expert')); ?></h1>
            <p><?php echo esc_html(get_theme_mod('hero_subtitle', 'Discover your dream home with Macall Smith. Expert guidance for buying, selling, and investing in West Michigan.')); ?></p>
            <a href="<?php echo esc_url('#contact'); ?>" class="button"><?php echo esc_html(get_theme_mod('hero_button_text', 'Get a Free Consultation')); ?></a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2><?php echo esc_html(get_theme_mod('about_title', 'About Macall Smith')); ?></h2>
            <?php echo wp_kses_post(wpautop(get_theme_mod('about_content', 'With nearly a decade of experience, Macall Smith is a dedicated real estate agent and broker specializing in residential homes throughout West Michigan.'))); ?>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2><?php echo esc_html(get_theme_mod('services_title', 'Our Services')); ?></h2>
            <?php
            $services = get_theme_mod('services_list', array(
                array('title' => 'Residential Transactions', 'description' => 'Expert guidance for buying and selling homes.'),
                array('title' => 'Timing and Property Management', 'description' => 'Strategic advice on when to buy or sell.'),
                array('title' => 'New Developments', 'description' => 'Stay informed about the latest trends and projects.')
            ));
            foreach ($services as $service) :
            ?>
                <div class="service-item">
                    <h3><?php echo $service['title']; ?></h3>
                    <p><?php echo $service['description']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Testimonials Section -->
    <?php get_template_part('template-parts/testimonials'); ?>

    <!-- Contact Form Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2><?php echo get_theme_mod('contact_title', 'Get in Touch'); ?></h2>
            <?php echo do_shortcode('[contact-form-7 id="123" title="Contact form 1"]'); ?>
        </div>
    </section>

</main>

<?php
get_footer();
?>
