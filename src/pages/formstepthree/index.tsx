import * as C from './styles';
import {Theme} from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext'
import {ChangeEvent, useEffect} from 'react';

export const FormThree = () =>{
    const history = useHistory();
    const {state, dispatch} = useForm();
    useEffect(() =>{
        if(state.name === ''){
            history.push('/');
        }else{
        dispatch({
            type:FormActions.setCurrentStep,
            payload:3
        })
    }
    },[])

  
    const HandleEmailChange = (e:ChangeEvent<HTMLInputElement>) =>{

        dispatch({
                type: FormActions.setEmail,
                payload: e.target.value,

        });

    }
    const HandleGithubChange = (e:ChangeEvent<HTMLInputElement>) =>{

        dispatch({
                type: FormActions.setGithub,
                payload: e.target.value,

        });

    }

    const HandleEnd = () =>{
        if(state.name != '' && state.github != ''){

            console.log(state);

        }else{
            throw (alert('Preencha os dados obrigatórios'));
        }


    }

        return(
            <Theme>
            <C.Container>

                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos.</p>

                <hr />

                    <label htmlFor="">
                        Qual seu e-mail?

                        <input 
                        placeholder="Digite seu e-mail"
                        type="email" 
                        value= {state.email}
                        onChange={HandleEmailChange}
                        />
                    </label>
                    <label htmlFor="">
                        Qual seu Github?

                        <input 
                        placeholder="Digite seu github"
                        type="url" 
                        value= {state.github}
                        onChange={HandleGithubChange}
                        />
                    </label>
                    <C.Buttons>
                    <Link className="left" to = "/step2">Voltar</Link>
                    <button onClick={HandleEnd}>Finalizar cadastro!</button>
                    </C.Buttons>




            </C.Container>
            </Theme>
        );

}