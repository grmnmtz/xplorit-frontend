import Titles from 'components/Common/Titles';
import React from 'react';
import Inputs from 'components/Common/Inputs';
import Btncards from 'components/Common/Btncards';
import CardCarousel from 'components/CardCarousel';

const classes = {
  parentcon:'font-primary justify-center',
  container:'w-full h-screen max-h-[700px] bg-routeplaceimg bg-no-repeat bg-cover',
  section:'flex h-full justify-center items-center bg-black/50',
  titlecon:'flex break-words w-full justify-around p-4',
  maincon:'w-5/6 justify-center inline-align-top text-center',
  titlescon:'mb-10',
  btn:'py-1',
  selectcon:'flex justify-end',
  textcon:'self-center',
  box:'mx-3 my-3',
  select:'block p-2.5 text-base text-gray-400 bg-neutral-200 bg-clip-padding bg-no-repeat border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:border-black focus:outline-none',
  carruselcon:'flex w-5/6 m-auto justify-center',
  textcarru:'ml-20 my-8',
}

function RoutePage() {
  return (
    <div className={classes.parentcon}>
    <div className={classes.container}>
      <section className={classes.section}>
        <div className={classes.maincon} >
          <div className={classes.titlescon} >
          <Titles
            tag="h1"
            titleText="Comienza a descubir rutas creadas por la comunidad"/>
          </div>
          <Inputs placeholderText='Escribe el nombre o palabra clave'/>
          <Btncards className={classes.btn} buttonText='Buscar'/>
        </div>
      </section>
    </div>
    <div className={classes.selectcon}>
      <div className={classes.textcon}>
        <p>Ordenar por:</p>
      </div>
      <div className={classes.box} >
      <select className={classes.select} >
        <option selected>Selecciona una opción</option>
        <option value='1'>Reciente</option>
        <option value='2'>Alfabeticamente</option>
        <option value='3'>Popular</option>
      </select>
      </div>
    </div>
    <div className={classes.textcarru} >
      <Titles tag='h4' titleText='Top de rutas populares' />
    </div>
    <div className={classes.carruselcon} >
        <CardCarousel/>
      </div>
      <div className={classes.textcarru}>
      <Titles tag='h4' titleText='Rutas cerca de ti' />
    </div>
    <div className={classes.carruselcon} >
        <CardCarousel/>
      </div>
      <div className={classes.textcarru}>
      <Titles tag='h4' titleText='Rutas compartidas recientemente' />
    </div>
    <div className={classes.carruselcon} >
        <CardCarousel/>
      </div>
  </div>
  
    
  );
}

export default RoutePage;