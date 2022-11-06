import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import * as api from '../../api/pixaBay';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Status from 'components/Status/Status';
const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      if (query === '') return;
      setLoading(true);
      setError(null);
      try {
        const data = await api.fetchImages({ query, page });
        setImages(prevImages => [...prevImages, ...data.images]);
        setCanLoadMore(data.canLoadMore);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [query, page]);
  const onSubmit = newQuery => {
    if (query.trim().toLowerCase() === newQuery.trim().toLowerCase()) return;
    setQuery(newQuery.trim());
    setPage(1);
    setImages([]);
  };
  const loadMore = () => setPage(prev => prev + 1);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} disableBtn={loading} />
      {(() => {
        if (error) {
          return <Status type="error" message={error} />;
        } else if (!query) {
          return <Status message={'Type something'} />;
        } else if (images.length === 0 && !loading) {
          return <Status type="warning" message={'Oops...Nothing found'} />;
        } else if (images.length > 0) {
          return (
            <>
              <ImageGallery images={images} />
              <Loader visible={loading} />
              {canLoadMore && (
                <Button loadMoreHandler={loadMore} disabled={loading} />
              )}
            </>
          );
        }
      })()}
    </div>
  );
};
export default App;
