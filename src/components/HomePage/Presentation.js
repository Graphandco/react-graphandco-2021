import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Button';

gsap.registerPlugin(ScrollTrigger);

export const Presentation = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const paragraphRefs = useRef([]);
  paragraphRefs.current = [];

  const addToRefs = (el) => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(contentRef.current, {
      x: '-100%',
      opacity: 0,
      duration: 2,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        start: 'top bottom-=300',
        trigger: sectionRef.current,
        //toggleActions: 'play none none reverse',
      },
    });
    gsap.from(imgRef.current, {
      x: '100%',
      opacity: 0,
      scale: 1.5,
      duration: 2,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        start: 'top bottom-=200',
        trigger: sectionRef.current,
        //toggleActions: 'play none none reverse',
      },
    });
    gsap.from(btnRef.current, {
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        start: 'top bottom-=200',
        trigger: btnRef.current,
        //toggleActions: 'play none none reverse',
      },
    });

    paragraphRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            //toggleActions: 'play none none reverse',
            //markers: true
          },
        },
      );
    });
  }, [sectionRef]);

  const content = [
    `<strong>La communication visuelle</strong>, et plus particulièrement par le biais d’un site internet, est devenu un élément essentiel aujourd’hui dans un monde régi par les nouvelles technologies et le numérique qui en découle.`,
    `<strong>Graph and Co</strong> vous aide à vous montrer présent sur internet, et permet à vos clients d’accéder à vos produits, informations, supports de communication, n’importe où, n’importe quand.`,
    `Opter pour un site web c’est se donner les chances d’optimiser le nombre de clients potentiels et de <strong>se montrer présent</strong> dans cette avancée vers le futur à laquelle nous sommes en train d’assister depuis quelques années.`,
    `Il est cependant important d’avoir <strong>un site correspondant à ses besoins</strong> et pouvant avoir un réel impact et apport commercial. Dématérialiser ses produits ne correspond pas forcément à tout le monde, mais par votre site seront transmises votre identité ainsi que les valeurs que vous souhaitez véhiculer, et Graph and Co place cela en haut de la liste de ses priorités en respectant vos exigences.`,
  ];

  return (
    <section ref={sectionRef} className="presentation">
      <div ref={contentRef} className="presentation-content container">
        <h2>Une agence web à votre service</h2>
        {content.map((p, index) => (
          <p ref={addToRefs} key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
        ))}
        <div ref={btnRef} className="cta">
          <Button title="Voir nos réalisations" link="/realisations" center mt="4" mb="2" />
        </div>
      </div>
      <div className="presentation-hero">
        <img ref={imgRef} src="/img/presentation.jpg" alt="Présentation" />
      </div>
    </section>
  );
};
