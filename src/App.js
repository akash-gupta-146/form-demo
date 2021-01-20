import React from 'react';
import Form from "./components/forms";
import Header from "./components/header";


export const FormContext = React.createContext();

const initialState = {
 activePage: 0,
};

const reducer = (state, action) => {
  let sectionName,activePage;
  switch (action.type) {
    case 'changeSection':
      sectionName = action.sectionName;
      activePage = action.pageNumber;
      return {
        ...state,sectionName,activePage
      }
    break;
    case "savePersonalInfo":
      sectionName = action.sectionName;
      console.log('xxxxx')
      return {
        ...state, sectionName,
         personalInfo: {...state.personalInfo,...action.personalInfo}, 
      }
      case 'saveEducationalDetails':
        sectionName = action.sectionName;
        return {
          ...state, sectionName,
          educationDetails: {...state.educationDetails,...action.educationDetails}, 
        }
        case 'saveContactDetails':
          sectionName = action.sectionName;
          return {
            ...state, sectionName,
            contactDetails: {...state.contactDetails,...action.contactDetails}, 
          }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <section className="container">
    <FormContext.Provider value={{state,dispatch}}>
      <Header />
      <Form />
    </FormContext.Provider>

  </section>
}

export default App;
