import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Activities'];

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600', category: 'Campus', title: 'School Building' },
  { id: 2, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', category: 'Campus', title: 'Library' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600', category: 'Events', title: 'Annual Day' },
  { id: 4, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600', category: 'Activities', title: 'Art Class' },
  { id: 5, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600', category: 'Sports', title: 'Basketball Court' },
  { id: 6, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600', category: 'Activities', title: 'Science Lab' },
  { id: 7, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600', category: 'Events', title: 'Republic Day' },
  { id: 8, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600', category: 'Campus', title: 'Classroom' },
  { id: 9, src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600', category: 'Sports', title: 'Sports Day' },
  { id: 10, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', category: 'Activities', title: 'Music Class' },
  { id: 11, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', category: 'Events', title: 'Graduation' },
  { id: 12, src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600', category: 'Campus', title: 'Computer Lab' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  return (
    <Layout title="Gallery - Delhi Public School Sursand">
      <PageHero title="Gallery" breadcrumb="Gallery" />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Photo Gallery"
            title="Glimpses of Our School"
            description="Explore moments from our school life, events, and activities."
            center
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image.id)}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-school hover:shadow-school-lg transition-all"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-primary-foreground">
                      <p className="text-sm text-secondary">{image.category}</p>
                      <h4 className="font-display font-bold">{image.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.title}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
