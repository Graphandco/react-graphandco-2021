import { FaPaintBrush, FaUserAlt, FaLock, FaMobileAlt } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Woman } from '../../assets/atouts.svg';

gsap.registerPlugin(ScrollTrigger);

export const Atouts = () => {
  const sectionRef = useRef(null);
  const title2Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(title2Ref.current, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: 'Elastic.easeOut',
      scrollTrigger: {
        start: 'top bottom-=300',
        trigger: sectionRef.current,
        //toggleActions: 'play none none reverse',
      },
    });
    gsap.from(imgRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
    gsap.from('.atouts-item', {
      duration: 0.5,
      autoAlpha: 0,
      ease: 'none',
      scale: 0,
      delay: 1,
      stagger: 0.5,
      scrollTrigger: {
        start: 'top bottom-=100',
        trigger: sectionRef.current,
      },
    });
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="atouts">
      <div className="atouts-item atouts-item-1">
        <FaPaintBrush />
        <div className="atouts-title">Interface utilisateur</div>
        <p>Un site internet unique, au design innovant et moderne</p>
      </div>
      <div className="atouts-item atouts-item-2">
        <FaUserAlt />
        <div className="atouts-title">Expérience utilisateur</div>
        <p>Un site fonctionnel et accessible, une navigation claire</p>
      </div>
      <div className="atouts-item atouts-item-3">
        <FaLock />
        <div className="atouts-title">Sécurité</div>
        <p>Votre site est protégé, les données de vos visiteurs sont sécurisées</p>
      </div>
      <div className="atouts-item atouts-item-4">
        <FaMobileAlt />
        <div className="atouts-title">Accessibilité</div>
        <p>Un site accessible et intuitif sur tous les types de supports et tailles d'écrans</p>
      </div>
      <div className="atouts-hero">
        {/* <img ref={imgRef} src="/img/atouts.png" alt="Atouts" /> */}
        <Woman ref={imgRef} />
        <h2 ref={title2Ref}>Les atouts de votre site</h2>
      </div>
    </section>
  );
};
