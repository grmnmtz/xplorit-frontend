import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//Components
import Btncards from 'components/Common/Btncards';
import Titles from 'components/Common/Titles';
import { Labels } from 'components/Common/Labels';
//Imgages & Icons
import ModalFiltro from 'components/ModalFiltro';
import Image from "assets/img/image.jpg"
import HeartFillOut from 'assets/icons/HeartFillOut';
import StarComplete from 'assets/icons/StarComplete';
import MapComponent from 'components/MapComponent'
import Toggle from 'components/Toggle';


const classes={
   sectionres:'font-primary w-full h-full min-h-screen',
   tagsfiltroscon:'flex flex-row justify-between p-1 w-full bg-white my-2',
   scroll:'scroll-smooth scroll-pl-4 snap-end snap-x snap-mandatory',
   scrolltags:'snap-center snap-always scroll-mr-3.5',
   btnclass:'py-2 flex flex-row-reverse content-center',
   renderres:'grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col h-full min-h-screen',
   asidecon:'col-span-5 xl:col-span-3 minTablet:col-span-2 bg-white divide-y divide-solid border-slate-500 px-3',
   rescon:'py-2 pl-2',
   articlecon:'py-2 px-4',
   infocon:'flex',
   img:'h-32 w-44 object-cover object-center rounded-md',
   detailscon:'flex flex-col pl-2',
   labelscon:'flex flex-wrap my-2',
   ubitextcon:'py-3',
   ubitext:'text-xs break-words',
   btn:'py-1',
   starticon:'mt-5',
   starttext:'text-xs text-center',
   mapcon:'minTablet:block col-span-3 bg-gray-200 h-full',

  
}
function PlaceSearch() {
 const [showMap, setShowMap] = useState(false);
 const isPhone = useMediaQuery({query:'(max-width: 960px)'});

 const HandlerClick = () => {
   
   setShowMap(!showMap)
   console.log(showMap)
 }
 let buttonText = 'Mostrar Mapa' 
 let mapContainerClass = classes.mapcon
 
 if (!showMap) 
  mapContainerClass += ' hidden'
 else 
  buttonText = 'Ocultar Mapa';
 
  const renderSideBar = (!isPhone || !showMap ) ? true : false
 

  return (
    <div className='pt-4'>
      <section className={classes.sectionres}>
        <div className={classes.tagsfiltroscon}>
          <div className='flex content-center items-center px-4'>
            <span>Lugares</span>
          <Toggle/>
          <span>Rutas</span>
          </div>
          <div className='hidden lg:flex overflow-x-hidden items-center pb-2'>
            
            <Btncards buttonText='Aire Libre' padding='px-4' color='bg-quartiary' className={`mr-4 text-base min-w-110px ${classes.btnclass} `} ></Btncards>
            <Btncards buttonText='Artesanias' padding='px-4' color='bg-quartiary' className={`mr-4 text-base ${classes.btnclass} `}></Btncards>
            <Btncards buttonText='Comida' padding='px-4' color='bg-quartiary' className={`mr-4 text-base ${classes.btnclass} `}></Btncards>
            <Btncards buttonText='Cultural' padding='px-4' color='bg-quartiary' className={`mr-4 text-base ${classes.btnclass} `}></Btncards>
            <Btncards buttonText='Entretenimiento' padding='px-4' color='bg-quartiary' className={`mr-4 text-base ${classes.btnclass} `}></Btncards>
            <Btncards buttonText='Familiar' padding='px-4' color='bg-quartiary' className={`mr-4 text-base ${classes.btnclass} `}></Btncards>
            <Btncards buttonText='Playa' padding='px-4' color='bg-quartiary' className={`mr-4 text-base ${classes.btnclass} `}></Btncards>
          </div>
          <div className='ml-auto'>
          <ModalFiltro/>
          </div>

        </div>
        <section className={classes.renderres}>
         {renderSideBar && <aside className={classes.asidecon}>
            <div className={classes.rescon} >Resultados de busqueda</div>
            <article className={classes.articlecon}>
              <div className={classes.infocon}>
                <img
                  src={Image}
                  alt="search-img"
                  className={classes.img}
                />
                <div className={classes.detailscon}>
                  <Titles tag="h6" titleText="Nombre del Lugar"></Titles>
                  <div className={classes.labelscon}>
                    <Labels LabelText="Aventura"></Labels>
                    <Labels LabelText="Playa"></Labels>
                    <Labels LabelText="Relajación"></Labels>
                    <Labels LabelText="Nocturno"></Labels>
                  </div>
                  <div className={classes.ubitextcon}>
                    <p className={classes.ubitext}>Ubicación del lugar</p>
                  </div>
                  <div>
                    <Btncards buttonText="Explorar" className={classes.btn} ></Btncards>
                  </div>
                </div>
                <div className='mr-auto'>
                  <HeartFillOut width="30px" height="30px" />
                  <StarComplete width="30px" height="30px" className={classes.starticon} />
                  <p className={classes.starttext}>5</p>
                </div>
              </div>
            </article>
            <article className={classes.articlecon}>
              <div className={classes.infocon}>
                <img
                  src={Image}
                  alt="search-img"
                  className={classes.img}
                />
                <div className={classes.detailscon}>
                  <Titles tag="h6" titleText="Nombre del Lugar"></Titles>
                  <div className={classes.labelscon}>
                    <Labels LabelText="Aventura"></Labels>
                    <Labels LabelText="Playa"></Labels>
                    <Labels LabelText="Relajación"></Labels>
                    <Labels LabelText="Nocturno"></Labels>
                  </div>
                  <div className={classes.ubitextcon}>
                    <p className={classes.ubitext}>Ubicación del lugar</p>
                  </div>
                  <div>
                    <Btncards buttonText="Explorar" className={classes.btn}></Btncards>
                  </div>
                </div>
                <div>
                  <HeartFillOut width="30px" height="30px" />
                  <StarComplete width="30px" height="30px" className={classes.starticon} />
                  <p className={classes.starttext}>5</p>
                </div>
              </div>
            </article>
            <Btncards buttonText='Mostrar más' color='bg-black'></Btncards>
          </aside>}
          <div className={mapContainerClass}>
            <MapComponent fullHeight={true}/>
          </div>
        </section>
        
        <Btncards buttonText={buttonText} className="py-1 block minTablet:hidden" onClick={HandlerClick}></Btncards>
      </section>
    </div>
  );
}

export default  PlaceSearch;