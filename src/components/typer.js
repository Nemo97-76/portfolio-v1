import React from 'react';
import Typed from 'typed.js';

function Typer() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MERN-stack developer', 'front-end Developer', 'Back-end Developer'],
      typeSpeed: 80,
      backSpeed: 70,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="typer">
      <span ref={el} />
    </div>
  );
}
export default Typer
