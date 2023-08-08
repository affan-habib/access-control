import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import { UrlBuilder } from 'helpers/UrlBuilder';
import useAuth from 'hooks/useAuth';
import { getRefreshToken, getUserIdAndName } from 'helpers/AuthUtils';

const AuthGuard = ({ children }) => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  const refresh_token = getRefreshToken();
  const { userId } = getUserIdAndName();

  useEffect(() => {
    if (!isLoggedIn && refresh_token) {
      axios
        .post(UrlBuilder.coreServiceApi("core/user/token/refresh"), {
          user_id: userId,
          refresh_token: refresh_token,
        })
        .then((response) => {
          const expirationDate = new Date();
          expirationDate.setTime(
            expirationDate.getTime() + 60 * 60 * 1000
          ); // 1 hour in milliseconds
          Cookies.set("access_token", response.data.access_token, {
            expires: expirationDate,
          });
          window.location.reload();
        })
        .catch((error) => {
          // Handle refresh error
        });
    }

    if (!isLoggedIn && !refresh_token) {
      navigate('login', { replace: true });
    }
  }, [refresh_token, isLoggedIn]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
