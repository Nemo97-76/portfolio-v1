import React from 'react';
import Typed from 'typed.js';

function Typer() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['UI Developer', 'Back-end Developer', 'Full-stack developer'],
      typeSpeed: 70,
      backSpeed: 70,
      startDelay: 70,
      loop: true,
      smartBackspace: true,
      showCursor: false
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