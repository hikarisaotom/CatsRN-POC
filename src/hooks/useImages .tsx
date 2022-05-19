import React, {useEffect, useRef, useState} from 'react';
import catsApi from '../api/catsApi';
import {ImageByCategory} from '../interfaces/cats';

export const useImages = (categoryID: Number, limit: Number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesByCategory, setImages] = useState<ImageByCategory[]>([]);
  const [page, setPage] = useState(0);
  let type = '';
  if (limit > 1) {
    type = 'gif,jpg,png';
  } else {
    type = 'gif';
  }
  useEffect(() => {
    getCategories();
  }, []);

  const reloadData= async () => {
    setPage(0)
    setImages([]);
   loadMore();
     setIsLoading(false)
  
  }
  const getCategories = async () => {
    setIsLoading(true);
    loadMore();
         setIsLoading(false)
  
  };

  const loadMore = async () => {
    const categories = await catsApi.get<ImageByCategory[]>('/images/search', {
      params: {category_ids: categoryID, limit, page, mime_types: type},
    });

    setImages([...imagesByCategory, ...categories.data]);
    if (page < 38) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };
  return {
    isLoading,
    imagesByCategory,
    reloadData,
    loadMore
  };
};
