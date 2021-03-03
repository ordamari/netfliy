import React from 'react';
import { Container, Base, Eror, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({children,...restProps}){
    return <Base {...restProps}>{children}</Base>
};

Form.Eror = function FormEror({children,...restProps}){
    return <Eror {...restProps}>{children}</Eror>
};

Form.Title = function FormTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
};

Form.Text = function FormText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
};

Form.TextSmall = function FormTextSmall({children,...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
};

Form.Link = function FormLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
};

Form.Input = function FormInput({children,...restProps}){
    return <Input {...restProps}>{children}</Input>
};

Form.Submit = function FormSubmit({children,...restProps}){
    return <Submit {...restProps}>{children}</Submit>
};
