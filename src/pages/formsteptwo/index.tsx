import * as C from './styles';
import {Theme} from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext'
import {ChangeEvent, useEffect} from 'react';
import {SelectOptions} from '../../components/selectOptions'

export const FormTwo = () =>{
    const history = useHistory();
    const {state, dispatch} = useForm();
    useEffect(() =>{
        if(state.name === ''){
            history.push('/');
        }else{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:2
        })
    }
    },[])

    const HandleNextStep = () =>{
        if(state.name != ''){
        history.push('/step3');
        }else{
            alert('Preencha os dados.');
        }    

    }

 
    const setLevel = (level:number)=>{
        dispatch({
            type:FormActions.setLevel,
            payload: level
        });
    }

        return(
            <Theme>
            <C.Container>

                <p>Passo 2/3</p>
                
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                
                    <SelectOptions
                        title="Sou iniciante"
                        description= "Comecei a programar há menos de 2 anos"
                        icon="🥳"
                        selected={state.level ===0}
                        onClick={()=>{setLevel(0)}}

                    />
                    <SelectOptions
                        title="Sou programador"
                        description= "Já programo há 2 anos  ou mais"
                        icon="😎"
                        selected={state.level ===1}
                        onClick={()=>{setLevel(1)}}

                    />
                    <C.Buttons>
                    <Link className="left" to = "/">Voltar</Link>
                    <button onClick={ HandleNextStep}>Próximo</button>
                    </C.Buttons>
                   




            </C.Container>
            </Theme>
        );

}