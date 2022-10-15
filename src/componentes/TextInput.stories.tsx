import {Meta, StoryObj} from '@storybook/react'
import {TextInput, TextInputInputProps, TextInputRootProps} from './TextInput'
import {Envelope} from 'phosphor-react';
export default{
    title: 'Component/TextInput',
    component: TextInput.Root,
    args: {
       children:[
        <TextInput.Icon>
            <Envelope></Envelope>
        </TextInput.Icon>,
        <TextInput.Input placeholder="Type your e-mail adress"/>
       ]
    },
    argTypes: {}
} as Meta <TextInputRootProps>

export const Default:StoryObj<TextInputRootProps>= {}

export const WithoutIcon:StoryObj<TextInputRootProps>= {
    args:{
        children: <TextInput.Input placeholder="Type your e-mail adress"/>
    }

}

