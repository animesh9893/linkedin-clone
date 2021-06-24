import {useLayoutEffect , useState} from 'react'

export const LogoURL = `https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png`


export const useWindowSize = ()=> {
  const [size,setSize] = useState([0,0]);
  useLayoutEffect(()=>{
    function updateSize() {
      setSize([window.innerWidth,window.innerHeight]);
    }
    window.addEventListener('resize',updateSize);
    updateSize();
    return ()=>window.removeEventListener('resize',updateSize);
  },[]);
  return size;
}

// export useWindowSize;

// const [url,SetURL]= useState('');

export const AppURL = () =>{
  const [url,SetURL] =  useState('');
  return {
    url,SetURL
  }
}

export const setIconState = (url) => {
  let App = AppURL()
  console.log(url)
  App.SetURL(url)
}

export const GetIconState = () =>{
  let App = AppURL()
  return App.url
}

