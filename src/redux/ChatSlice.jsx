// redux/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatList: [
    {
      userImage: require('../assets/images/users/user1.jpeg'),
      userName: 'Hamza',
      chatText: 'Harun quidem rerum facilis est et expedita distinctio, Nam libero tempore, cum nobis.',
      timeAgo: '1 day ago',
    },
    {
      userImage: require('../assets/images/users/user1.jpeg'),
      userName: 'Mohammed',
      chatText: 'Sure, Thanks',
      timeAgo: '21 hrs ago',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      console.log('old:', state.chatList); 
      state.chatList.push(action.payload);
      console.log('New:', state.chatList); 
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
