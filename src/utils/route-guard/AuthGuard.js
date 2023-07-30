import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import { useDispatch, useSelector } from 'react-redux';
import { callApi, selectApi } from 'store/reducers/apiSlice';
import { UrlBuilder } from 'helpers/UrlBuilder';
import useAuth from 'hooks/useAuth';
import { getRefreshToken, getUserIdAndName } from 'helpers/AuthUtils';
import Cookies from 'js-cookie';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { refresh } = useSelector(selectApi)
  const refresh_token = getRefreshToken();
  const { userId } = getUserIdAndName()
  useEffect(() => {
    if (!isLoggedIn && refresh_token) {
      dispatch(
        callApi({
          operationId: UrlBuilder.coreServiceApi("core/user/token/refresh"),
          output: "refresh",
          parameters: {
            body: JSON.stringify({
              user_id: userId,
              refresh_token: refresh_token
            }),
            method: "POST",
          }
        })
      );
    }
    if (refresh?.data?.access_token && !isLoggedIn) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour in milliseconds
      Cookies.set("access_token", refresh.data.access_token, {
        expires: expirationDate,
      });
      window.location.reload();
    }
    if (!isLoggedIn && !refresh_token) {
      navigate('login', { replace: true });
    }
  }, [refresh_token, isLoggedIn, refresh]);


  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('login', { replace: true });
  //   }
  // }, [isLoggedIn, navigate]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
