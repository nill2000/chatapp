import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";


const DataContext = createContext();

export function DataProvider({children}){
	const [sharedData, setSharedData] = useState({user:"", room:""});

	return(
		<DataContext.Provider value={{sharedData, setSharedData}}>
			{children}
		</DataContext.Provider>
	)
}

export function useData(){
	return useContext(DataContext);
}

DataProvider.propTypes = {
	children: PropTypes.any
}


