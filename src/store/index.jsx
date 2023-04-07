import { kMaxLength } from "buffer";
import { connected } from "process";
import { createGlobalState } from "react-hooks-global-state";
const {setGlobalState , useGlobalState,getGlobalState } = createGlobalState({
    modal : 'scale-0',
    access : 'scale-0',
    ShowModal : 'scale-0',
    ShowWork : 'scale-0',
    UpdateModal : 'scale-0',
    login:'scale-0',
    loading :{show:false , msg:'Minting in progress...'},
    alert: { show: false, msg: '', color: '' },
    connectedAccount: '',
    balance : '',
    nft : null,
    nfts : [],
    works : [],
    work : null ,
    transactions:[],
    contract : null





})
const setLoadingMsg =(msg)=>{
    const loading = getGlobalState('loading')
    setGlobalState('loading',{...loading,msg})

}

const setAlert = (msg, color = 'green') => {
    setGlobalState('loading', false)
    setGlobalState('alert', { show: true, msg, color })
    setTimeout(() => {
      setGlobalState('alert', { show: false, msg: '', color })
    }, 6000)
  }
const truncate = (text,startChars,endChars, maxLength) => {
    if (text.length > maxLength) {
        var start = text.substring(0,startChars)
        var end = text.substring(text.length - endChars ,text.length)
        while(start.length + end.length < maxLength){
            start = start + '.'
        }
            return text
    }
}
export{useGlobalState,setGlobalState,getGlobalState,setLoadingMsg,setAlert,truncate}
