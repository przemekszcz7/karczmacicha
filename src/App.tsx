/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Clock, Utensils, Info, X, ZoomIn } from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/645403846_122100684303217795_8586455982729099921_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=UzDWvjlzuPoQ7kNvwFGtLw2&_nc_oc=Adowg5bw7K9590AVZXKGg17RiEHAgglWBFq8X-xkQpMRQJcdN8Wh0ur5V5FC1nYYhig&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=jsrV2waBjA2XD0KCaKZb0w&_nc_ss=7b2a8&oh=00_Af1mvfsB_sw8Khy_q0Zx_NXK04CXA4ImW7uNFArtRFSuXQ&oe=69F38F16",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/680654317_122121255465217795_5415763450928253937_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VOIvaju9zRUQ7kNvwFZqrLZ&_nc_oc=AdrkafZYvfbSRD3wHgVht_MkqGheVWDOGh9b6Zesy8eDstZvDIHPqXd89_ZtDs5aNtg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Mw06hVKhVfuBYItbFHe7SQ&_nc_ss=7b2a8&oh=00_Af33YenQn6v8lC6xjJzUZNF0-s_rhGLY66KSRn-sxaiToQ&oe=69F37A20",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/678346546_122121255411217795_4307084651624376818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ApNiYXVknMkQ7kNvwEoDzQK&_nc_oc=Adp9bgs4F5OnxUFOrYQs5uKz-Y2S5nU1HiYNSNp8X3MeasXySqon-SMLiwCWB1Jmxcc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=28RRRxN78FE7mNd222-ENw&_nc_ss=7b2a8&oh=00_Af0kacY8hSaR1vFx_6cGkBFwtaKh9EJbWE3sD9fooENzZw&oe=69F3A048",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/668250222_122119548171217795_4618640549228855103_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=R7w4yJTnCLAQ7kNvwEReJCR&_nc_oc=AdoyHRyoE46IaPIKV0rxckdJniU7Zt9NFuoWKw00qvwDUSsK8xpBKu_OUIj0B_b6ZUo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ZQakJDevZvGg8iBBJcZXLQ&_nc_ss=7b2a8&oh=00_Af361RtW6IzMsS2mCKdtxPxEXGwblq_wMcmcqJsPM4y5rg&oe=69F372EF"
];

const FB_URL = "https://www.facebook.com/profile.php?id=61586533871225";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen border-[12px] border-tavern-red relative wood-texture">
      {/* Folk Pattern Header Accent */}
      <div className="absolute top-0 left-0 w-full h-2 folk-pattern-header bg-repeat-x z-[60]"></div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-tavern-cream/95 backdrop-blur-sm border-b border-tavern-border px-6 md:px-10 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/646462755_26226968116934211_6740115487410581841_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=EptQZhOpwPUQ7kNvwFpdnqv&_nc_oc=AdpHHWbd2T5dIikLfffLa3AtC7tDsOoqXxx2wcJ--IOp2dVqlcy7Ne2sZ5urHtpFSeU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=GJhUFCvt1sJjNob_9uooPQ&_nc_ss=7b2a8&oh=00_Af1M8PQII4DYg2GgyKWFqibUNjABVeecoOkkq3Yf3HQPtA&oe=69F37F69" 
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-tavern-red shadow-xl" 
              alt="Logo" 
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-5xl font-black tracking-tight text-tavern-red uppercase font-serif">
                Karczma Cicha
              </h1>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-tavern-brown-light font-bold">Tradycja • Smak • Beskidy</p>
            </div>
          </div>
          <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest font-bold text-tavern-brown-mid">
            <a href="#o-nas" className="hover:text-tavern-red transition-all border-b-2 border-transparent hover:border-tavern-red pb-1">Start</a>
            <a href="#region" className="hover:text-tavern-red transition-all border-b-2 border-transparent hover:border-tavern-red pb-1">Region</a>
            <a href="#smaki" className="hover:text-tavern-red transition-all border-b-2 border-transparent hover:border-tavern-red pb-1">Smaki</a>
            <a href="#galeria" className="hover:text-tavern-red transition-all border-b-2 border-transparent hover:border-tavern-red pb-1">Galeria</a>
            <a href="#kontakt" className="hover:text-tavern-red transition-all border-b-2 border-transparent hover:border-tavern-red pb-1">Kontakt</a>
          </div>
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tavern-red text-white p-3 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </nav>

      <main>
        {/* Banner Informacyjny */}
        <div className="bg-tavern-red text-white py-4 px-4 text-center sticky top-[88px] md:top-[128px] z-40 border-b border-black/10">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 animate-pulse">
            <Clock className="w-6 h-6 shrink-0" />
            <p className="font-serif text-xl md:text-2xl font-bold tracking-wide">
              Wielkie Otwarcie: <span className="italic underline underline-offset-4">1 maja od godziny 12:00</span>
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section id="o-nas" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES[0]} 
              className="w-full h-full object-cover brightness-[0.4] scale-105" 
              alt="Beskidy Soblówka" 
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-block py-2 px-6 border-2 border-tavern-red text-tavern-red uppercase font-bold tracking-[0.3em] text-sm bg-white/10 backdrop-blur-md mb-4">
                  Soblówka Zaprasza
                </div>
                <h2 className="text-5xl md:text-9xl font-black text-tavern-cream font-serif italic leading-tight">
                  Karczma <br />
                  <span className="text-tavern-red not-italic">Cicha</span>
                </h2>
                <div className="flex justify-center py-4">
                  <div className="w-32 h-1 bg-tavern-red"></div>
                </div>
                <p className="text-xl md:text-3xl text-tavern-cream/90 font-serif leading-relaxed max-w-4xl mx-auto">
                  Mamy zaszczyt zaprosić Państwa do nowo otwartego miejsca na kulinarnej mapie Beskidów Żywieckich. Odkryj smak tradycji w nowoczesnym wydaniu.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                   <a href="#kontakt" className="bg-tavern-red hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-1">
                      Odwiedź nas
                   </a>
                   <a href="#smaki" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all">
                      Nasze Specjały
                   </a>
                </div>
              </motion.div>
          </div>
        </section>

        {/* Section: Region */}
        <section id="region" className="py-32 px-6 bg-[#fffdfa] relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
             <Utensils className="w-96 h-96" />
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
                <h3 className="text-xl font-bold text-tavern-red mb-4 uppercase tracking-[0.5em]">U progu gór</h3>
                <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 italic text-tavern-brown">Lokalizacja pełna <br />spokoju</h2>
                <p className="text-xl text-tavern-brown-mid mb-8 font-serif leading-loose">
                  Soblówka to malownicza wieś położona u stóp góry Wielka Racza i Muńcuł. Nasza Karczma znajduje się w samym sercu tej spokojnej okolicy, gdzie czas płynie wolniej, a powietrze pachnie lasem i górami.
                </p>
                <p className="text-lg text-tavern-brown-light leading-relaxed italic border-l-4 border-tavern-red pl-6">
                  "Miejsce, gdzie szlaki Beskidu Żywieckiego spotykają się z prawdziwym, domowym jadłem. Tutaj znajdziesz wytchnienie po górskiej wędrówce."
                </p>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-8 border-white transform rotate-2">
                   <img src={IMAGES[2]} alt="Region" className="w-full h-full object-cover aspect-[4/3]" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-tavern-red opacity-10 rounded-full blur-3xl"></div>
             </motion.div>
          </div>
        </section>

        {/* Section: Smaki */}
        <section id="smaki" className="py-32 px-6 bg-tavern-brown-dark text-tavern-cream relative">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <h2 className="text-5xl md:text-8xl font-serif italic mb-6">Tradycyjne Jadło</h2>
                 <div className="folk-divider text-tavern-red">
                    <Utensils className="w-10 h-10" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="space-y-6 text-center p-8 border border-white/10 rounded-sm hover:border-tavern-red/50 transition-colors bg-white/5">
                    <h4 className="text-3xl font-serif text-tavern-red italic">Kwaśnica na żeberku</h4>
                    <p className="opacity-70">Tradycyjna, mocna, gotowana na wędzonym i domowej kapuście kiszonej.</p>
                 </div>
                 <div className="space-y-6 text-center p-8 border border-white/10 rounded-sm hover:border-tavern-red/50 transition-colors bg-white/5">
                    <h4 className="text-3xl font-serif text-tavern-red italic">Placek po Zbójnicku</h4>
                    <p className="opacity-70">Chrupiący placek ziemniaczany z obfitym gulaszem i kleksem gęstej śmietany.</p>
                 </div>
                 <div className="space-y-6 text-center p-8 border border-white/10 rounded-sm hover:border-tavern-red/50 transition-colors bg-white/5">
                    <h4 className="text-3xl font-serif text-tavern-red italic">Pstrąg z Potoku</h4>
                    <p className="opacity-70">Świeży pstrąg pieczony w maśle z ziołami prosto z naszego ogródka.</p>
                 </div>
              </div>

              <div className="mt-20 text-center">
                 <p className="text-2xl italic opacity-60">I wiele innych regionalnych specjałów czekających na Państwa od 1 maja!</p>
              </div>
           </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h3 className="text-xl font-bold text-tavern-red mb-2 uppercase tracking-[0.5em]">Widoki</h3>
                <h2 className="text-5xl md:text-7xl font-serif font-black italic text-tavern-brown">Obrazy z Karczmy</h2>
              </div>
              <p className="max-w-md text-tavern-brown-light text-lg">Zajrzyj do środka i poczuj atmosferę, którą tworzymy z myślą o naszych gościach.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {IMAGES.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-sm aspect-square shadow-xl cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Karczma Cicha ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-tavern-red/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                     <div className="w-16 h-16 border-2 border-white rotate-45 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white -rotate-45" />
                     </div>
                     <p className="text-white font-bold uppercase tracking-widest text-xs">Powiększ</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-tavern-brown-dark/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute top-8 right-8 text-white hover:text-tavern-red transition-colors z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-10 h-10" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center pointer-events-none"
              >
                <img
                  src={selectedImage}
                  alt="Zoomed View"
                  className="max-w-full max-h-full object-contain shadow-2xl border-4 border-white pointer-events-auto"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact & Map Section */}
        <section id="kontakt" className="py-32 px-6 bg-tavern-cream border-t-8 border-tavern-red wood-texture">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 font-black font-serif italic text-tavern-brown leading-tight">
                  Znajdź nas na <br />szlaku
                </h2>
                <p className="text-lg text-tavern-brown-mid font-serif leading-relaxed italic">
                  Często bywamy w ruchu, przygotowując wszystko na otwarcie, więc najpewniejszą drogą kontaktu jest telefon.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white border-b-4 border-tavern-red shadow-lg space-y-3 md:col-span-2">
                   <Utensils className="w-6 h-6 text-tavern-red mb-1" />
                   <h3 className="font-bold uppercase tracking-widest text-[10px] opacity-40">Wydarzenia</h3>
                   <p className="text-lg md:text-xl font-serif italic text-tavern-brown">Organizujemy imprezy okolicznościowe</p>
                   <p className="text-tavern-brown-mid text-sm opacity-80 leading-relaxed">Przygotujemy dla Państwa niezapomniane chrzciny, komunie, urodziny czy spotkania firmowe w wyjątkowym, góralskim klimacie.</p>
                </div>

                <div className="p-6 bg-white border-b-4 border-tavern-red shadow-lg space-y-3">
                   <MapPin className="w-6 h-6 text-tavern-red mb-1" />
                   <h3 className="font-bold uppercase tracking-widest text-[10px] opacity-40">Gdzie jesteśmy</h3>
                   <p className="text-lg font-serif italic text-tavern-brown">Soblówka 169a,<br />34-371 Ujsoły</p>
                </div>

                <div className="p-6 bg-tavern-brown-dark text-white border-b-4 border-tavern-red shadow-lg space-y-3">
                   <Phone className="w-6 h-6 text-tavern-red mb-1" />
                   <h3 className="font-bold uppercase tracking-widest text-[10px] opacity-40">Zadzwoń do nas</h3>
                   <a href="tel:789440936" className="text-lg font-serif italic hover:text-tavern-red transition-colors block">789 440 936</a>
                </div>

                <div className="p-6 bg-white border-b-4 border-tavern-red shadow-lg space-y-3 md:col-span-2">
                   <Mail className="w-6 h-6 text-tavern-red mb-1" />
                   <h3 className="font-bold uppercase tracking-widest text-[10px] opacity-40">Napisz wiadomość</h3>
                   <a href="mailto:karczmacicha@poczta.onet.pl" className="text-lg md:text-xl font-serif italic hover:text-tavern-red transition-all break-words text-tavern-brown">karczmacicha@poczta.onet.pl</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                 <a 
                    href={FB_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#1877F2] text-white py-6 rounded-sm font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 shadow-xl hover:-translate-y-1 transition-all"
                 >
                    <Facebook className="w-5 h-5" />
                    Obserwuj nas
                 </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full h-[500px] lg:h-[650px] rounded-sm overflow-hidden shadow-2xl border-[16px] border-white relative z-10"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20745.016803573068!2d19.123425679837442!3d49.46321306326504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714367ad3ffac6b%3A0xb307d362698bdb65!2sSobl%C3%B3wka%20169%2C%2034-371%20Sobl%C3%B3wka!5e0!3m2!1spl!2spl!4v1777185818182!5m2!1spl!2spl" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Lokalizacja Karczmy Cichej"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-tavern-brown-dark text-tavern-cream py-24 px-10 relative overflow-hidden">
        <div className="absolute inset-0 ornament-bg opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-20">
              <div className="text-center md:text-left space-y-6">
                 <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <img 
                      src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/646462755_26226968116934211_6740115487410581841_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=EptQZhOpwPUQ7kNvwFpdnqv&_nc_oc=AdpHHWbd2T5dIikLfffLa3AtC7tDsOoqXxx2wcJ--IOp2dVqlcy7Ne2sZ5urHtpFSeU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=GJhUFCvt1sJjNob_9uooPQ&_nc_ss=7b2a8&oh=00_Af1M8PQII4DYg2GgyKWFqibUNjABVeecoOkkq3Yf3HQPtA&oe=69F37F69" 
                      className="w-20 h-20 rounded-full grayscale border-2 border-white/20" 
                      alt="Footer Logo" 
                    />
                    <h2 className="text-3xl md:text-5xl font-serif font-black italic tracking-wide">Karczma Cicha</h2>
                 </div>
                 <p className="opacity-50 font-serif text-lg italic max-w-sm">W sercu Soblówki, gdzie tradycja spotyka się z górską ciszą. Do zobaczenia 1 maja!</p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-10">
                 <div className="flex gap-8">
                    <div className="w-16 h-16 border-[6px] border-tavern-red rotate-45 flex items-center justify-center">
                       <div className="w-8 h-8 bg-tavern-red"></div>
                    </div>
                    <div className="w-16 h-16 border-[6px] border-white/20 rotate-45 flex items-center justify-center">
                       <div className="w-8 h-8 bg-white/10"></div>
                    </div>
                 </div>
                 <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-30">© {new Date().getFullYear()} Karczma Cicha • Beskidy Żywieckie</p>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
