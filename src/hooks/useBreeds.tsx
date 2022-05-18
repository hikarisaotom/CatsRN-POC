import React, {useEffect, useState} from 'react';
import catsApi from '../api/catsApi';
import {Cat} from '../interfaces/cats';

export const useBreeds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [breeds, setBreeds] = useState<Cat[]>([]);

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    const cats = await catsApi.get<Cat[]>('/breeds');
    setBreeds(cats.data)
    setIsLoading(false)
  };
  return {
    isLoading,
    breeds,
  };
};
