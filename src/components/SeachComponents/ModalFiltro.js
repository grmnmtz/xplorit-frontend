import { useState } from 'react';
import {endpoints} from 'endpoints/endpoints';

//Components
import BtnTags from './BtnTags';
import FiltroSelector from 'components/SeachComponents/FiltroSelector';
//Icons 
import { AdjustmentsIcon } from '@heroicons/react/outline';



const classes = {
  filtrobtn:'flex flex-row-reverse content-center bg-secondary text-white active:bg-blue-700 hover:bg-blue-700 font-primary font-normal text-sm px-6 py-3 rounded-full shadow-testimonialShadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
  filtroicon:'mr-2',
  perentcon:'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 font-primary outline-none focus:outline-none',
  containersize:'relative w-auto my-6 mx-auto max-w-3xl',
  containerdesing:'border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none',
  headermodal:'flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t',
  headertext:'font-semibold text-lg text-center',
  equisdesing:'bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none',
  closebtn:'p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none',
  bodycon:'relative p-6 flex-auto',
  distancecon:'relative pt-1',
  rangedesing:'form-range appearance-none w-full h-4 p-0 bg-gray-100 rounded-md focus:outline-none focus:ring-0 focus:shadow-none',
  btntagscon:'flex flex-wrap py-12',
  sortcon:'flex flex-wrap sm:flex-nowrap',
  starscon:'flex mr-4 items-center',
  starsaux:'flex flex-grap',
  labels:'text-xs',
  star:'ml-4 mr-2',
  recientcon:'flex items-center w-full',
  filtroscon:'w-full',
  checkbox:'w-4 h-4 ml-4 bg-gray-50 rounded border border-gray-300 appearance-none checked:bg-blue-500 indeterminate:bg-gray-300 focus:ring-3 focus:ring-blue-300 default:ring-2',
  btnclass: 'py-2 flex flex-row content-center mb-3',
  footercon:'flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b',
  cancelcon:'text-red-500 background-transparent font-nomal px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
  savecon:'bg-secondary text-white active:bg-blue-700 font-normal text-sm px-6 py-3 rounded-full shadow hover:shadow-testimonialShadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
  positioncon:'opacity-25 fixed inset-0 z-40 bg-black',
};
function ModalFiltro({onTagClick=null, onSearch=null, onStateURL=null, 
  onChange=null,onRangeChange=null ,sort, minValue, maxValue, value }) {
  const [showModal, setShowModal] = useState(false);
 const [filtros, setFiltros] = useState([]);

  const handleSortChange = (sort) => {
    setFiltros(sort)
     console.log(sort)
     onStateURL(endpoints.getFilterPlace)
  }

  const handleAplicar = () => {
    // console.log('Antes:', onSearch)
    let newURL = onSearch + 'sort=' + filtros.value;
     onStateURL(newURL)
    //  console.log('Despues:', onSearch)
    setShowModal(false)
   
  }

  const handleTagChange = (info) => {
    let newURL = '';
    if(onSearch.includes('q=')){
      newURL = onSearch + info
      if(onSearch.includes('tags')){
        newURL = onSearch + ',' + info;
      }
    } else {
      newURL = onSearch + '&tags=' + info; 
    }
    onStateURL(newURL)
    //console.log('Is my URL?', newURL)
  }

  return (
    <>
      <button
        className={classes.filtrobtn}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Filtros
        <AdjustmentsIcon width="20px" height="20px" className={classes.filtroicon} />
      </button>
      {showModal ? (
        <>
          <div className={classes.perentcon}>
            <div className={classes.containersize}>
              {/*content*/}
              <div className={classes.containerdesing}>
                {/*header*/}
                <div className={classes.headermodal}>
                  <h3 className={classes.headertext}>
                    Aplica los filtros que mejor se ajusten a tu busqueda
                  </h3>
                  <button
                    className={classes.closebtn}
                    onClick={() => setShowModal(false)}
                  >
                    <span className={classes.equisdesing}>
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className={classes.bodycon}>
                  <div className={classes.distancecon}>
                    <label htmlFor="customRange1" className="form-label">
                      Distancia
                    </label>
                    <div className='flex'>
                      <label className='text-xxs'>{minValue}</label>  
                      <input type="range" max={maxValue} min={minValue} step={1} value={value}
                    onChange={onRangeChange} className={classes.rangedesing} id="customRange1"
                    />
                    <label className='text-xxs'>{maxValue}</label>
                    </div>
                    
                  </div>
                  <div className={classes.btntagscon}>
                  <BtnTags className={classes.btnclass} onTagClick={handleTagChange} />
                  </div>
                  <div>
                    <div className={classes.sortcon}>
                       <div className={classes.recientcon}>
                       <label className={classes.labels}>Buscar por:</label>
                          <div className={classes.filtroscon}>
                            <FiltroSelector onChange={handleSortChange} sort={filtros}/>
                          </div>
                       </div>
                    </div>
                      
                  </div>
                </div>
                {/*footer*/}
                <div className={classes.footercon}>
                  <button
                    className={classes.cancelcon}  
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                 </button>
                  <button
                    className={classes.savecon}
                    type="button"
                    onClick={handleAplicar}
                  >
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.positioncon}></div>
        </>
      ) : null}
    </>
  );
}
export default ModalFiltro;
