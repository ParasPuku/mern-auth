import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setParams } from '../store/reducers/params.reducer';

const ParamsWrapper = ({ children }) => {
  const params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setParams(slug));
  }, [slug]);

  return children;
};

export default ParamsWrapper;