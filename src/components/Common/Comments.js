import React from 'react';
import Avatar from 'components/Common/Avatar';
import StartHalf from 'assets/icons/StarHalf.jsx';
import Titles from "components/Common/Titles";
const classes={
  container:' font-primary min-w-commentsW h-commentsH bg-white rounded-3xl drop-shadow-testimonial Shadow mt-20',
  maincon:'flex flex-row m-2 pt-4',
  avatarcon:'flex rounded-full p-2.5',
  detailscon:'flex flex-col mt-4',
  titleh3:'text-2xl fond-normal',
  qualificationcon:'flex',
  number:'mx-2',
  text:'p-5 font-base break-words',
}

function Comments() {
  return (
    <div className={classes.container}>
      <div className={classes.maincon}>
         <Avatar width="38" height="38" />
        <div className={classes.detailscon}>
          <Titles tag="h5" titleText='Lupita Rosales'></Titles>
          <p>Fecha de Publicación</p>
          <div className={classes.qualificationcon}>
            <StartHalf width="1.375rem" height="1.375rem" />
            <p className={classes.number}>4.8</p>
          </div>
        </div>
      </div>
      <p className={classes.text} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum purus sit
        gravida ullamcorper lectus sapien, massa at odio. Cursus tortor sodales
        laoreet faucibus ullamcorper sit urna nullam porttitor. Sed at in
        viverra purus quis. Varius suspendisse volutpat habitasse hendrerit
        velit at in nisi, volutpat. Eu morbi in lacinia nunc, mauris vel sed
        nunc. Vitae fermentum cras senectus netus est velit porttitor imperdiet.
      </p>
    </div>
  );
}

export default Comments;
