import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "react-query";
//Services
import { getCardsPlacesHome } from "services/places.services";
import { getAllStates } from "services/utils.services";
//Components
import Btncards from "components/Common/Btncards";
import ModalFiltro from "components/SeachComponents/ModalFiltro";
import MapComponent from "components/MapComponent";
import Toggle from "components/SeachComponents/Toggle";
import SearchCards from "components/SeachComponents/SearchCards";
import StateSelector from "components/SeachComponents/StateSelector";
import BtnTags from "components/SeachComponents/BtnTags";
import LimitCards from "components/SeachComponents/LimitCards";

const classes = {
  parentcon:'pt-16',
  sectionres:'font-primary w-full h-full min-h-screen',
  tagsfiltroscon:'flex flex-row justify-between p-1 w-full bg-white my-2',
  scroll:'scroll-smooth scroll-pl-4 snap-end snap-x snap-mandatory',
  scrolltags:'snap-center snap-always scroll-mr-3.5',
  togglecon:'flex content-center items-center px-4',
  btnclass:'py-2 flex flex-row-reverse content-center',
  btntagscon:'hidden lg:flex overflow-x-hidden items-center pb-2',
  renderres:'grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col h-full min-h-screen',
  togglespanplace:'mr-2',
  togglespanroute:'mx-2',
  filtroposition:'ml-auto',
  asidecon:'col-span-5 xl:col-span-3 minTablet:col-span-2 bg-white divide-y divide-solid border-slate-500 px-3 overscroll-y-auto',
  rescon:'py-2 pl-2',
  selectorcon:'flex flex-row w-full',
  mapcon:'minTablet:block col-span-3 bg-gray-200 h-full',
  btnshow:'py-1 block minTablet:hidden',
  
};
function PlaceSearch() {
  const [showMap, setShowMap] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const isPhone = useMediaQuery({ query: "(max-width: 960px)" });
  const { data: statesData, status: statesStatus } = useQuery( "getAllStates", getAllStates );
  console.logo(statesStatus)
//Querys & services 
  const useQueryPlaces = () => {
    //places
    const cardsForPlacesInHome = useQuery("getAllPlaces", getCardsPlacesHome);
    return { cardsForPlacesInHome };
  };
  const { cardsForPlacesInHome } = useQueryPlaces();

  const { data: placesData, isLoading: loadingPlace, status } = cardsForPlacesInHome;

  if (status === "error") {
    return (
      <span className="font-bold text-center">
        No se encontraron lugares con ese ID
      </span>
    );
  }

//Event Ocultar Aside Mapa
  const handlerClick = () => {
    setShowMap(!showMap);
    
  };
  let buttonText = "Mostrar Mapa";
  let mapContainerClass = classes.mapcon;

  if (!showMap) mapContainerClass += " hidden";
  else buttonText = "Ocultar Mapa";

  const renderSideBar = !isPhone || !showMap ? true : false;

//Selectors de Estado y Municipio
  const onStateChange = (stateItem) => {
    setSelectedState(stateItem);
    setSelectedMunicipio(null);
  };

  const onMunicipioChange = (municipioItem) => {
    setSelectedMunicipio(municipioItem);
  };

  return (
    <div className={classes.parentcon}>
      <section className={classes.sectionres}>
        <div className={classes.tagsfiltroscon}>
          <div className={classes.togglecon}>
            <span className={classes.togglespanplace}>Lugares</span>
            <Toggle />
            <span className={classes.togglespanroute}>Rutas</span>
          </div>
          <div className={classes.btntagscon}>
            <BtnTags/>
          </div>
          <div className={classes.filtroposition}>
            <ModalFiltro />
          </div>
        </div>
        <section className={classes.renderres}>
          {renderSideBar && (
            <aside className={classes.asidecon}>
              <div className={classes.selectorcon}>
                <StateSelector
                  locationsData={statesData}
                  onStateChange={onStateChange}
                  selectOption={selectedState}
                />
                <StateSelector
                  locationsData={selectedState?.municipios || []}
                  renderMunicipios={true}
                  selectOption={selectedMunicipio}
                  onStateChange={onMunicipioChange}
                />
              </div>

              <div className={classes.rescon}>Resultados de busqueda</div>
              {loadingPlace === true ? (
                <span>Loading...</span>
              ) : (
                placesData.map((data) => {
                  return (
                    <SearchCards
                      id={data._id}
                      //typeofplace={data.type}
                      key={data._id}
                      name={data.name}
                      address={data.address.street}
                      labels={data.tags}
                      score={data.average}
                      ownerId={data.ownerId}
                      images={data?.images}
                    />
                  );
                })
              )}
             <LimitCards/>
            </aside>
          )}
          <div className={mapContainerClass}>
            <MapComponent fullHeight={true} />
          </div>
        </section>

        <Btncards
          buttonText={buttonText}
          className={classes.btnshow}
          onClick={handlerClick}
        ></Btncards>
      </section>
    </div>
  );
}

export default PlaceSearch;
