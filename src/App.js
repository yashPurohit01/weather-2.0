import axios from 'axios';
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

  const { isLoading, air_quality, location, current_info, astro , forcasts , hourly_Update } = state;

  const { condition, feelslike_c, temp_c } = current_info

  useEffect(() => {

    const apiCall = async () => {
      dispatch({ type: FETCH_DATA, })

      if (searchQuery) {
        try {
          const { data } = await Axios.get(`forecast.json?q=${searchQuery}&days=3&aqi=yes&key=${api_key}`)

          dispatch({
            type: FETCH_DATA_SUCCESSFULLY, payload: data
          })

          console.log(data);
        }
        catch (e) {
          dispatch({
            type: FETCH_DATA_FAIL,
            payload: "Something went wrong"
          })
        }
      }
    }
    apiCall()
  }, [searchQuery]);
  return (
    <div className="App">
      <NavBar air_quality={air_quality} isLoading={isLoading} />
      <HeaderComponent setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <MainComponent current_info={current_info} isLoading={isLoading} />
      <RightTempComponent
        astro={astro}
        location={location}
        feelslike={feelslike_c}
        condition={condition}
        temp={temp_c}
        hourly_Update={hourly_Update}
        isLoading={isLoading} />
    </div>
  );
}

export default App;
