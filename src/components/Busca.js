import React, {Component} from 'react'
import { InputText } from 'primereact/inputtext'
import { Button }  from 'primereact/button'
export default class Busca extends Component{
    state = {
        termoDebusca:''
    }
    onTermoAlterado =(event) => {
        console.log(event.target.value)
    }
    render() {
        return(
            <div className='flex flex-column'>
                <span className='p-input-icon-left w-full'>
                    <i className='pi pi-search'></i>
                    <InputText
                    className= 'w-full'
                    onchenge={this.onTermoAlterado}
                    placeholder = {this.props.dica}
                    />
                    
                </span>
                <Button
                label='OK'
                className='p button-outlined mt-2'
                />
            </div>
        )
    }
}

Busca.defaultProps={
    dica: "Digite algo ..."
}