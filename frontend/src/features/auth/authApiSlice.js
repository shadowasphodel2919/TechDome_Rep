import { apiSlice } from "../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

//creating auth api slice
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    //const { data } = 
                    await queryFulfilled
                    //console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        //reset api state after 1 second after logOut
                        dispatch(apiSlice.util.resetApiState())
                    },1000)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled
                    console.log(data);
                    const {accessToken} = data
                    dispatch(setCredentials({accessToken}))
                } catch(err){
                    console.log(err);
                }
            }
        }),
    })
})
//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice 