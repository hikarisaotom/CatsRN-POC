import React, {useEffect, useState} from 'react';
import catsApi from '../api/catsApi';
import { Category} from '../interfaces/cats';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setIsLoading(true)
    const categories = await catsApi.get<Category[]>('/categories');
    setCategory(categories.data)
    setIsLoading(false)
  };
  return {
    isLoading,
    categories,
    getCategories
  };
};
