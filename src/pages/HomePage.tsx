import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Shield, Star } from 'lucide-react';

const HomePage = () => {
  const brands = [
    'Gucci', 'Armani', 'Prada', 'Bulgari', 'Versace', 'Dolce & Gabbana', 'Calvin Klein', 'Hugo Boss'
  ];

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Brands',
      description: 'Authentic luxury fragrances from the world\'s most prestigious perfume houses.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Authenticity Guaranteed',
      description: 'Every bottle is authenticated and sourced directly from authorized distributors.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Curated Selection',
      description: 'Carefully selected fragrances for both men and women from top luxury brands.'
    }
  ];

  const menPerfumes = [
    {
      name: 'Acqua di Gio Profumo',
      brand: 'Armani',
      image: 'https://i.pinimg.com/736x/d7/91/cb/d791cbd3d4ff7153c2d1f04454f89f3c.jpg',
      rating: 4.8
    },
    {
      name: 'Guilty Pour Homme',
      brand: 'Gucci',
      image: 'https://i.pinimg.com/1200x/24/21/52/2421520b81cf8e97c2065731843b310a.jpg',
      rating: 4.6
    },
    {
      name: 'Luna Rossa Carbon',
      brand: 'Prada',
      image: 'https://i.pinimg.com/1200x/99/3a/07/993a070878c99140a06b151b97b25a1f.jpg',
      rating: 4.7
    },
    {
      name: 'Man Black Cologne',
      brand: 'Bulgari',
      image: 'https://i.pinimg.com/1200x/e3/f8/bb/e3f8bbe157471bb24d22fc7b34826f03.jpg',
      rating: 4.5
    }
  ];

  const womenPerfumes = [
    {
      name: 'Bloom Acqua di Fiori',
      brand: 'Gucci',
      image: 'https://i.pinimg.com/736x/30/47/1b/30471b8279499f95086f65ec4088fa03.jpg',
      rating: 4.9
    },
    {
      name: 'Si Passione',
      brand: 'Armani',
      image: 'https://i.pinimg.com/1200x/1d/72/90/1d729095779bfd182693e70e524f9995.jpg',
      rating: 4.8
    },
    {
      name: 'Candy',
      brand: 'Prada',
      image: 'https://i.pinimg.com/736x/81/b7/12/81b7123a8f05dfb2bd0ab713e0f64fcc.jpg',
      rating: 4.6
    },
    {
      name: 'Omnia Crystalline',
      brand: 'Bulgari',
      image: 'https://i.pinimg.com/1200x/2b/45/24/2b4524cdb95d82ba164c43fe00023b7a.jpg',
      rating: 4.7
    }
  ];

  const PerfumeCard = ({ perfume }: { perfume: any }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
          <Star className="w-4 h-4 text-gold fill-current" />
          <span className="text-xs font-semibold">{perfume.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-charcoal mb-1">{perfume.name}</h3>
        <p className="text-gray-600 font-medium">{perfume.brand}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-ce28-61f5-ba4b-a841c2e415c1/raw?se=2025-07-29T16%3A48%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=f6330956-2cd3-5ffa-8c3c-a49869ae1daf&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-28T18%3A05%3A15Z&ske=2025-07-29T18%3A05%3A15Z&sks=b&skv=2024-08-04&sig=lalOqQGjt66nSG/dHGHP23BOUr862lZp8zC9xNPME8c%3D"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>


        {/* Animated Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gold opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-gold opacity-30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reveal Your Aura.<br />
            <span className="text-gold">With Confidence.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Experience luxury fragrances from the world's most prestigious brands. Authentic perfumes for the discerning individual.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-gold text-charcoal font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 space-x-2"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Features Section + Brand Showcase with shared background */}
      <div className="relative py-20" style={{backgroundImage: "url('https://i.pinimg.com/736x/03/0a/09/030a09d7080a2e24d0ffa736dfd63650.jpg')", backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-white bg-opacity-75 z-0"></div>
        <div className="relative z-10">
          {/* Features Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Why Choose Starz Import </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We bring you the finest luxury fragrances with guaranteed authenticity and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-md"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold bg-opacity-10 rounded-full text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* Brand Showcase */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
                Premium Brands
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-lg font-semibold text-charcoal group-hover:text-gold transition-colors">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Men's Perfumes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">For Him</h2>
            <p className="text-xl text-gray-600">Sophisticated fragrances for the modern gentleman</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menPerfumes.map((perfume, index) => (
              <PerfumeCard key={index} perfume={perfume} />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Perfumes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">For Her</h2>
            <p className="text-xl text-gray-600">Elegant fragrances for the sophisticated woman</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {womenPerfumes.map((perfume, index) => (
              <PerfumeCard key={index} perfume={perfume} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Fragrance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discover our complete collection of luxury perfumes and find the scent that defines you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;