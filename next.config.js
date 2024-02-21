// next.config.js

module.exports = {
    images: {
      domains: ['the-app-ideas.onrender.com','the-app-ideas.onrender.comundefined','theappideas.com'],
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
      },
      async rewrites() {
        return [
          {
            source: '/contact-us',
            destination: '/ContactUs',
          },
          {
            source: '/portfolio',
            destination: '/PortFolio',
          },
          {
            source: '/blog',
            destination: '/HeaderBlog',
          },
          {
            source: '/lawyer-website-solution',
            destination: '/LawyerWeb',
          },
          {
            source: '/about-us',
            destination: '/Company/ABoutUs',
          },
          {
            source: '/our-process',
            destination: '/Company/OurProcess',
          },
          {
            source: '/our-team',
            destination: '/Company/OurTeam',
          },
          {
            source: '/life-at-tai',
            destination: '/Company/LifeTAI',
          },
          {
            source: '/careers',
            destination: '/Company/Careers',
          },
          {
            source: '/blog/slug/:slug',
            destination: '/SingleBlog',
          },
          {
            source: '/career-application/:slug',
            destination: '/CareerApply',
          },
          {
            source: '/testimonial',
            destination: '/Company/Testimonial',
          },
          {
            source: '/taxi-booking-app-development',
            destination: '/Solutions/OnDemandApp/TaxiBooking',
          },
          {
            source: '/doctor-hiring-app-solution',
            destination: '/Solutions/OnDemandApp/DoctorHiring',
          }, {
            source: '/security-app-solution',
            destination: '/Solutions/OnDemandApp/SecurityApp',
          },
          {
            source: '/mobile-app-development',
            destination: '/MobileAppDevelopment/MobileAppDevelopment',
          },
          {
            source: '/android-app-development',
            destination: '/MobileAppDevelopment/AndroidAppDevelopment',
          },
          {
            source: '/iphone-app-development',
            destination: '/MobileAppDevelopment/IphoneAppDevelopment',
          },
          {
            source: '/ipad-app-development',
            destination: '/MobileAppDevelopment/IpadAppDevelopment',
          },
          {
            source: '/react-native-development',
            destination: '/MobileAppDevelopment/ReactNativeDevelopment',
          },
          {
            source: '/iot-app-development',
            destination: '/MobileAppDevelopment/IOTAppDevelopment',
          },
          {
            source: '/software-development',
            destination: '/Services/SoftwareDevelopment/SoftwareDev',
          },
          {
            source: '/asp-net-development',
            destination: '/Services/SoftwareDevelopment/AspNet',
          },
          {
            source: '/dotnetnuke-development',
            destination: '/Services/SoftwareDevelopment/DotNetDev',
          },
          {
            source: '/digital-marketing-agency',
            destination: '/Services/DigitalMaketing/DigitalMarketing',
          },
          {
            source: '/seo',
            destination: '/Services/DigitalMaketing/SEO',
          },
          {
            source: '/social-media-marketing',
            destination: '/Services/DigitalMaketing/SocialMedia',
          },
          {
            source: '/aso',
            destination: '/Services/DigitalMaketing/ASO',
          },
          {
            source: '/designing-services',
            destination: '/Services/DesigningServices/Designing',
          },
          {
            source: '/graphics-design',
            destination: '/Services/DesigningServices/GraphicsDesign',
          },
          {
            source: '/mobile-app-design',
            destination: '/Services/DesigningServices/MobileAppDesign',
          },
          {
            source: '/shopify-development',
            destination: '/Services/ECommerceWeb/ShopifyDev',
          },
          {
            source: '/magento-development',
            destination: '/Services/ECommerceWeb/MagentoDev',
          },
          {
            source: '/joomla-development',
            destination: '/Services/ECommerceWeb/Joomla',
          },
          {
            source: '/drupal-development',
            destination: '/Services/ECommerceWeb/DrupalDev',
          },
          {
            source: '/web-development',
            destination: '/Services/WebDevelopment/WebDevelopment',
          },
          {
            source: '/e-commerce-website-development',
            destination: '/Services/ECommerceWeb/ECommerceWeb',
          },
          {
            source: '/startup-services',
            destination: '/StartupServices',
          },
          {
            source: '/wordpress-development',
            destination: '/Services/WebDevelopment/WordPressDeveloper',
          },
          {
            source: '/php-development',
            destination: '/Services/WebDevelopment/PHPDev',
          },
          {
            source: '/angular-development',
            destination: '/Services/WebDevelopment/Angular',
          },
          {
            source: '/webflow-development',
            destination: '/Services/WebDevelopment/WebFlowDev',
          },
          {
            source: '/hire-us',
            destination: '/HireUs/HireUs',
          },
          {
            source: '/hire-ios-developer',
            destination: '/HireUs/HireMobileAppDev/HireIOSDev',
          },
          {
            source: '/hire-android-developer',
            destination: '/HireUs/HireMobileAppDev/HireAndroidDev',
          },
          {
            source: '/hire-react-native-developer',
            destination: '/HireUs/HireMobileAppDev/HireReactNativeDev',
          },
          {
            source: '/hire-flutter-developer',
            destination: '/HireUs/HireMobileAppDev/HireFlutterDev',
          },
          {
            source: '/hire-laravel-developer',
            destination: '/HireUs/HireWebDev/HireLaravelDev',
          },
          {
            source: '/hire-wordpress-developer',
            destination: '/HireUs/HireWebDev/HireWordPressDev',
          },
          {
            source: '/hire-nodejs-developer',
            destination: '/HireUs/HireWebDev/HireNodeDev',
          },
          {
            source: '/hire-codeigniter-developer',
            destination: '/HireUs/HireWebDev/HireCodeIgniter',
          },
          {
            source: '/hire-php-developer',
            destination: '/HireUs/HireWebDev/HirePHPDev',
          },
          {
            source: '/hire-python-developer',
            destination: '/HireUs/HireWebDev/HirePythonDev',
          },
          {
            source: '/hire-reactjs-developer',
            destination: '/HireUs/HireWebDev/HireReactJsDev',
          },
          {
            source: '/hire-angular-developer',
            destination: '/HireUs/HireWebDev/HireAngular',
          },
          {
            source: '/hire-shopify-development',
            destination: '/HireUs/HireECommerce/HireShopify',
          },
          {
            source: '/hire-magento-development',
            destination: '/HireUs/HireECommerce/HireMagento',
          },
          {
            source: '/solutions',
            destination: '/Solutions/Solutions',
          },
          {
            source: '/food-delivery-app-development',
            destination: '/Solutions/DeliveryApp/FoodDelivery',
          },
     
          {
            source: '/courier-pickup-management-solution',
            destination: '/Solutions/DeliveryApp/CourierPickup',
          },
          {
            source: '/grocery-app-developer',
            destination: '/Solutions/DeliveryApp/GroceryApp',
          },
 
        
          {
            source: '/e-commerce-app-development',
            destination: '/Solutions/PopularSolution/EcommerceApp',
          },
          {
            source: '/e-learning-app-development',
            destination: '/Solutions/PopularSolution/ElearningApp',
          },
          {
            source: '/dating-app-development',
            destination: '/Solutions/PopularSolution/DatingApp',
          },
          {
            source: '/driver-tracking-app-development',
            destination: '/Solutions/PopularSolution/DriverTrackingApp',
          },
          {
            source: '/salon-service-app',
            destination: '/Solutions/PopularSolution/SalonApp',
          },

          {
            source: '/sitemap',
            destination: '/Sitemap/SiteMap',
          },
          {
            source: '/mobile-app-development-toronto',
            destination: '/Sitemap/LocationsWiseServices/MobileAppToronto',
          },
          {
            source: '/mobile-app-development-new-york',
            destination: '/Sitemap/LocationsWiseServices/MobileAppNewyork',
          },
          {
            source: '/mobile-app-development-barcelona',
            destination: '/Sitemap/LocationsWiseServices/MobileAppBarcelona',
          },
          {
            source: '/mobile-app-development-Sydney',
            destination: '/Sitemap/LocationsWiseServices/MobileAppSydney',
          },
          {
            source: '/mobile-app-development-adelaide',
            destination: '/Sitemap/LocationsWiseServices/MobileAppAdelaide',
          },
          {
            source: '/mobile-app-development-brisbane',
            destination: '/Sitemap/LocationsWiseServices/MobileAppBrisbane',
          },
 
          {
            source: '/mobile-app-development-Bristol',
            destination: '/Sitemap/LocationsWiseServices/MobileAppBristol',
          },
          {
            source: '/mobile-app-development-Liverpool',
            destination: '/Sitemap/LocationsWiseServices/MobileAppLiverpool',
          },
          {
            source: '/mobile-app-development-Manchester',
            destination: '/Sitemap/LocationsWiseServices/MobileAppManchester',
          },
          {
            source: '/mobile-app-development-Melbourne',
            destination: '/Sitemap/LocationsWiseServices/MobileAppMelbourne',
          },
          {
            source: '/mobile-app-development-London',
            destination: '/Sitemap/LocationsWiseServices/MobileAppLondon',
          },
 
     
        ];
      },
  };
  