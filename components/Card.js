import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Card = ({ id, name, thumb }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className='cursor-pointer' onClick={() => handleClick(id)}>
      <Image loader={() => thumb} src={thumb} alt={name} width={250} height={250} />
      <p className='text-lg font-bold text-center'>{name}</p>
    </div>
  );
};

export default Card;