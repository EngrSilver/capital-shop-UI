import React, { useState } from 'react';
import collection from './Collection.json';
import { SingleCard } from './SingleCard';

export default function FirstCollection() {
  console.log(collection);
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {collection[0].map((item) => {
        return <SingleCard item={item} />;
      })}
    </div>
  );
}
