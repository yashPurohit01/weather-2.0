
import { useState, useEffect, useReducer } from 'react';
import { api_key } from './api/api';
import Axios from './api/Axios';
import './App.scss';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';
import MainComponent from './Component/MainComponent/MainComponent';
import NavBar from './Component/NavigationBar/NavBar';
import RightTempComponent from './Component/RightComponent/RightTempComponent';
import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESSFULLY } from './reducer/const';
import { INITIAL_STATE, postReducer } from './reducer/reducer';

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const { isLoading, air_quality, location, current_info, astro , forcasts , hourly_Update,status_code } = state;

  const { condition, feelslike_c, temp_c } = current_info
  useEffect(() => {

    const apiCall = async () => {
      dispatch({ type: FETCH_DATA, })

      if (searchQuery) { 
        try {
          const res = await Axios.get(`forecast.json?q=${searchQuery}&days=7&aqi=yes&key=${api_key}`)
           const {data, status } = res
           console.log(res)
          dispatch({
            type: FETCH_DATA_SUCCESSFULLY, payload:res
          }
            )

        }
        catch (err) {
          console.log("----")
          console.log(err.response); 
          dispatch({
            type: FETCH_DATA_FAIL,
            payload:err.response
          })
        }
      }
    }
    apiCall()
  }, [searchQuery]);
  return (
    <div className="App">
      <NavBar air_quality={air_quality} isLoading={isLoading}  status_code={status_code}/>
      <HeaderComponent setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <MainComponent current_info={current_info} forcasts = {forcasts} isLoading={isLoading} status_code={status_code}/>
      <RightTempComponent
        astro={astro}
        location={location}
        feelslike={feelslike_c}
        condition={condition}
        temp={temp_c}
        hourly_Update={hourly_Update}
        isLoading={isLoading} 
        status_code={status_code}/>
    </div>
  );
}

export default App;
