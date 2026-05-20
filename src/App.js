import React from 'react';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import GridScanSimple from './components/GridScanSimple';

function App() {
  return (
    <div className="App">
      <div style={{ position: 'fixed', inset: 0, zIndex: -2, background: '#000' }}>
        <GridScanSimple
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#6179e5"
          scanOpacity={0.4}
          enablePost={true}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          lineJitter={0.1}
          scanGlow={0.5}
          scanSoftness={2}
        />
      </div>
      <div className="content-wrapper">
        <Header />
        <Presentacion />
        <Proyectos />
        <Habilidades />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
