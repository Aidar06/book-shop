import React from 'react';
import InfoDetail from "./InfoDetail/infoDetail";
import InfoMore from "./InfoMore/infoMore";
import InfoReview from "./InfoReview/infoReview";
import InfoOthers from "./InfoOthers/infoOthers";

const Info = () => {
    return (
        <>
         <InfoDetail/>
         <InfoMore/>
         <InfoReview/>
         <InfoOthers/>
        </>
    );
};

export default Info;