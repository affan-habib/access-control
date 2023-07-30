// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  chats: [],
  user: {},
  users: []
};

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USER
    getUserSuccess(state, action) {
      state.user = action.payload;
    },

    // GET USER CHATS
    getUserChatsSuccess(state, action) {
      state.chats = action.payload;
    },

    // GET USERS
    getUsersSuccess(state, action) {
      state.users = action.payload;
    }
  }
});

// Reducer
export default chat.reducer;

// ----------------------------------------------------------------------

export function getUser(id) {
  return async () => {
    try {
      const response = await axios.post('/api/chat/users/id', { id });
      dispatch(chat.actions.getUserSuccess(response.data));
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}

export function getUserChats(chatId) {
  return async () => {
    try {
      const response = await axios.get(`http://13.212.46.33:5000/api/v1/message/${chatId}`,);
      dispatch(chat.actions.getUserChatsSuccess(response.data.data));
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}

export function insertChat(chat) {
  return async () => {
    try {
      await axios.post(`http://13.212.46.33:5000/api/v1/message`, chat);
    } catch (error) {
      dispatch(chat.actions.hasError(error));
    }
  };
}

// export function getUsers() {
//   return async () => {
//     try {
//       const response = await axios.get('/api/chat/users');
//       dispatch(chat.actions.getUsersSuccess(response.data.users));
//     } catch (error) {
//       dispatch(chat.actions.hasError(error));
//     }
//   };
// }
