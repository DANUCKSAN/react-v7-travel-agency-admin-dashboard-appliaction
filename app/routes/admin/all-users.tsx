import Header from 'components/Header'
import React from 'react'
import {ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids'
import { users } from '~/constants'

const AllUsers = () => {
  return (
    <main className='all-users wrapper'>
       <Header
    title="Manage Users"
    description="Filter, sort, and detailed user profiles "
    />

    <GridComponent dataSource={users} gridLines='None'>
      <ColumnsDirective>
      <ColumnDirective
      field='name'
      headerText='name'
      width="200"
      textAlign='Left'
      template={(props:UserData)=>(
        <div className='flex items-center gap 1.5 px-4'>
          <img src={props.imageUrl} alt={props.name} className='rounded-full size-8 aspect-square'/>
          <span>{props.name}</span>
        </div>
      )}

      
      
      />

       <ColumnDirective
      field='email'
      headerText='Email'
      width="150"
      textAlign='Left'
    />

    <ColumnDirective
      field='dateJoined'
      headerText='Date Joined'
      width="120"
      textAlign='Left'
         
      
      
      />

      <ColumnDirective
      field='itineraryCreated'
      headerText='Itinerary Created'
      width="130"
      textAlign='Left'
     
      
      />
      </ColumnsDirective>

      

    </GridComponent>

    </main>
  )
}

export default AllUsers
