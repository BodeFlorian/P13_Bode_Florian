import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiCall from './../../utils/api'

// Connexion utilisateur
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const loginResponse = await apiCall('/user/login', 'POST', null, {
        email,
        password,
      })
      const { token } = loginResponse.body

      const profileResponse = await apiCall('/user/profile', 'POST', token)
      const { email: userEmail, firstName, lastName } = profileResponse.body

      return { token, email: userEmail, firstName, lastName }
    } catch (error) {
      return rejectWithValue('Erreur de connexion. Vérifiez vos identifiants.')
    }
  }
)

// Mise à jour du prénom et du nom de l'utilisateur
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await apiCall('/user/profile', 'PUT', token, {
        firstName,
        lastName,
      })
      return response.body
    } catch (error) {
      return rejectWithValue('Échec de la mise à jour du profil utilisateur')
    }
  }
)

// Récupération du profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (token, { rejectWithValue }) => {
    try {
      const response = await apiCall('/user/profile', 'POST', token)
      return response.body
    } catch (error) {
      return rejectWithValue('Échec de la récupération du profil utilisateur')
    }
  }
)

// Slice auth
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('authToken') || null,
    user: {
      email: localStorage.getItem('userEmail') || '',
      firstName: localStorage.getItem('firstName') || '',
      lastName: localStorage.getItem('lastName') || '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null
      state.user = { email: '', firstName: '', lastName: '' }
      localStorage.clear()
    },
  },
  extraReducers: (builder) => {
    builder
      // Connexion
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token, email, firstName, lastName } = action.payload
        state.token = token
        state.user = { email, firstName, lastName }
        state.status = 'succeeded'
        state.error = null

        localStorage.setItem('authToken', token)
        localStorage.setItem('userEmail', email)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })

      // Mise à jour du prénom et du nom de l'utilisateur
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { firstName, lastName } = action.payload
        state.user.firstName = firstName
        state.user.lastName = lastName
        state.status = 'succeeded'

        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })

      // Récupération du profil utilisateur
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        const { email, firstName, lastName } = action.payload
        state.user = { email, firstName, lastName }
        state.status = 'succeeded'

        localStorage.setItem('userEmail', email)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

// Exports
export const { logout } = authSlice.actions
export const selectUserEmail = (state) => state.auth.user.email
export const selectUserFirstName = (state) => state.auth.user.firstName
export const selectUserLastName = (state) => state.auth.user.lastName
export const selectToken = (state) => state.auth.token
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error
export default authSlice.reducer
