import PropTypes from 'prop-types'
const Labels =({LabelText=' '}) =>{
const classes={
    wraplabels:'m-1',
    labels:'bg-tagscolor text-xxs sm:text-sm px-2 p-1 mr-1 sm:mr-4 my-2 rounded-full'
} 
 
    return (
        <div className={classes.wraplabels} >
     <label className={classes.labels}>{LabelText}</label>
    </div>
    );
} 
Labels.propTypes= {
    LabelText: PropTypes.string,
  }

export {Labels}