import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dimmer, Loader, Segment } from "semantic-ui-react";

/**
 * Import components and add to it's respective route link
 */
const SalutationsPage = lazy(() => import('../components/salutations/salutations'));

const Routers = () => (
   <React.Fragment>
      <BrowserRouter>
         <Suspense fallback={
            <Segment className='width-100 height-100 padding-0 border-none margin-0 border-radius-0'>
               <Dimmer active inverted className='padding-0'>
                  <Loader inverted>Cargando Página</Loader>
               </Dimmer>
            </Segment>
         }>

            <Switch>
               <Route path="/salutations" component={SalutationsPage} exact={true} />
            </Switch>
            
         </Suspense>
      </BrowserRouter>
   </React.Fragment>
)
export default Routers

