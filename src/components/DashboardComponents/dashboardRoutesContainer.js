import React from 'react';
import BigTitle from 'components/Common/BigTitle';
//Usequery
import { useQuery} from 'react-query'
import { getRoutesCreatedByUser } from 'services/user.services';
import DashboardCard from './DashboardCard';

export default function DashboardRoutesContainer() {

 const id = '61ef68279262e2f167700caf'

 const getRoutes = useQuery(["getRoutes", id], getRoutesCreatedByUser)
 
 const { data, status } = getRoutes

 if(status === 'loading') {
     return <span> Loading...</span>
 }

if(status === 'error') {
    return <span className='font-bold text-center'>No se encontraron Rutas con ese ID</span>
}


  return <>
        <BigTitle bigTitleText='Rutas creadas'/>
        {data&&data.map((route) =>{
          console.log("data: ",data)
        return <DashboardCard key={route._id} cardData={route}/>
        })}
    </>
   
}
