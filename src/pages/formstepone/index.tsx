import * as C from './styles';
import {Theme} from '../../components/Theme';
import { useHistory } from 'react-router';
import {useForm, FormActions} from '../../contexts/FormContext'
import {ChangeEvent, useEffect} from 'react';

export const FormOne = () =>{
    const history = useHistory();
    const {state, dispatch} = useForm();
    useEffect(() =>{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:1
            
        })
    },[])

    const HandleNextStep = () =>{
        if(state.name != ''){
        history.push('/step2');
        }else{
            alert('Preencha os dados.');
        }    

    }
    const HandleNameChange = (e:ChangeEvent<HTMLInputElement>) =>{

        dispatch({
                type: FormActions.setName,
                payload: e.target.value,

        });

    }

        return(
            <Theme>
            <C.Container>

                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>

                <hr />

                    <label >
                        Seu nome Completo:

                        <input 
                        placeholder="Digite seu nome"
                        type="text" 
                        autoFocus
                        value= {state.name}
                        onChange={HandleNameChange}
                        />
                    </label>
                   <button onClick={HandleNextStep}>Próximo</button>




            </C.Container>
            </Theme>
        );

}