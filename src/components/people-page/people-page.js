import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';
import SwapiServiceContext from '../swapi-service-context';

const PeoplePage = ({ id, onItemSelected }) => {
    const { getAllPeople, getPerson, getPersonImage } = useContext(
        SwapiServiceContext,
    );

    return (
        <div className='row mb2'>
            <div className='col-md-6'>
                <ItemList
                    onItemSelected={onItemSelected}
                    getData={getAllPeople}
                    renderItem={item => item.name}
                />
            </div>
            <div className='col-md-6'>
                <ItemDetails
                    id={id}
                    getData={getPerson}
                    getImageUrl={item => getPersonImage(item)}>
                    <Record label='Gender' field='gender' />
                    <Record label='Birth Year' field='birthYear' />
                    <Record label='Eye Color' field='eyeColor' />
                </ItemDetails>
            </div>
        </div>
    );
};

PeoplePage.propTypes = {
    id: PropTypes.string.isRequired,
    onItemSelected: PropTypes.func.isRequired,
};

export default PeoplePage;
