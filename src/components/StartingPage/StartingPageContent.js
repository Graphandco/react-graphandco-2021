import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StartingPageContent = () => {
  const h1Ref = useRef(null);
  const sectionRef = useRef(null);

  // useEffect(() => {
  //    gsap.from(h1Ref.current, {
  //       x: 500,
  //       scrollTrigger: {
  //          trigger: sectionRef.current,
  //          scrub: true
  //       }
  //    })
  // }, [h1Ref])

  // useEffect(() => {
  //    gsap.to(h1Ref.current, {
  //       x: 500,
  //       scrollTrigger: {
  //          trigger: sectionRef.current,
  //          start: 'top bottom-=100',
  //          end: 'bottom bottom+=400',
  //          scrub: true,
  //          markers: true
  //       }
  //    })
  // }, [h1Ref])

  // useEffect(() => {
  //    gsap.from(h1Ref.current, {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //          trigger: sectionRef.current,
  //          start: 'top bottom-=100',
  //          end: 'bottom bottom+=400',
  //          //scrub: true,
  //          markers: true
  //       }
  //    })
  // }, [h1Ref])

  useEffect(() => {
    gsap.from('.sample p', {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.sample p',
        start: 'top bottom-=100',
        end: 'bottom bottom+=400',
        //scrub: true,
        //markers: true
      },
    });
  }, [h1Ref]);

  return (
    <section ref={sectionRef} className="sample">
      <h1 ref={h1Ref}>Header 1</h1>
      <p>
        Lorem ipsum <em>emphasised text</em> dolor sit amet, <strong>strong text</strong> consectetur adipisicing elit, <abbr title="">abbreviated text</abbr>{' '}
        sed do eiusmod tempor <acronym title="">acronym text</acronym> incididunt ut labore et dolore magna aliqua. Ut <q>quoted text</q> enim ad minim veniam,
        quis nostrud exercitation <a href="/">link text</a> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute <del>deleted text</del>{' '}
        <ins>inserted text</ins> irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat{' '}
        <code>code text</code> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <blockquote>
        <p>Blockquote. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
      </blockquote>
      <p>
        <cite>
          <a href="/">Cite author with link text</a>
        </cite>
        , 2008
      </p>
      <h2>Header 2</h2>
      <p>
        Extended paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <ol>
        <li>Ordered list</li>
        <li>Item 2 Consectetur adipisicing elit</li>
        <li>Item 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ol>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h3>Header 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ul>
        <li>Unordered list</li>
        <li>Consectetur adipisicing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
      <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <pre>
        <code>pre and code pair</code>
      </pre>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h4>Header 4</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <dl>
        <dt>Definition list</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </dd>
      </dl>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <table summary="Table summary">
        <caption>Table Caption</caption>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content</td>
            <td>1</td>
            <td>a</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>2</td>
            <td>b</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>3</td>
            <td>c</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>4</td>
            <td>d</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>5</td>
            <td>e</td>
          </tr>
          <tr>
            <td>Content</td>
            <td>6</td>
            <td>f</td>
          </tr>
        </tbody>
      </table>{' '}
      <address>Author text</address>
    </section>
  );
};

export default StartingPageContent;
