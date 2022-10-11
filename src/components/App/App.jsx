import React from 'react';
import css from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import * as api from '../../api/pixaBay';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Status from 'components/Status/Status';
class App extends React.Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    canLoadMore: false,
    error: null,
  };
  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      (prevState.query !== query || prevState.page !== page) &&
      query !== ''
    ) {
      this.setState({ loading: true, error: null });
      try {
        const data = await api.fetchImages({ query, page: this.state.page });
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.images],
            canLoadMore: data.canLoadMore,
          };
        });
      } catch ({ message }) {
        this.setState({ error: message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onSubmit = query => {
    if (this.state.query !== query) {
      this.setState({ query, page: 1, images: [] });
    }
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { onSubmit, loadMore } = this;
    const { images, canLoadMore, loading, error, query } = this.state;
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
  }
}
export default App;
