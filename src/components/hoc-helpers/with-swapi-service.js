import React from 'react';
import SwapiServiceContext from '../swapi-service-context/swapi-service-context';

const withSwapiService = Wrapped => props => (
  <SwapiServiceContext.Consumer>
    {swapiService => <Wrapped {...props} swapiService={swapiService} />}
  </SwapiServiceContext.Consumer>
);

export default withSwapiService;
