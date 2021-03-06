// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
// --------------------------------------
// Create Functional Component
// --------------------------------------

const classes = {
    body:'bg-white w-full' ,
    suggestions:'border-black',
}
const MapSuggestions = ({loading, suggestions,getSuggestionItemProps }) => {
    const suggestionsStyle = {
        visibility : !loading && suggestions.length <= 0 ?'hidden' : 'visible',
    }
    return (
        <div className = {classes.body} style = {suggestionsStyle}>
            {loading && <span> ...Loading  </span>}
            {
                suggestions.map((suggestion) => {
                    return (
                        <div {...getSuggestionItemProps(suggestion)} className = {classes.suggestions} key = {suggestion.description}>
                            {suggestion.description}
                        </div>
                    )
                })
            }
        </div>
    )
}
// --------------------------------------
// Define PropTypes
// --------------------------------------
MapSuggestions.propTypes = {
    loading : PropTypes.bool.isRequired,
    suggestions : PropTypes.array.isRequired,
    getSuggestionItemProps : PropTypes.any
};
// --------------------------------------
// Export Component
// --------------------------------------
export default MapSuggestions;








