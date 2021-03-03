import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profilles';

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function profilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function profilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}


Profiles.Item = function profilesItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function profilesPicture({ src, ...restProps }) {
    return <Picture src={src ? `images/users/${src}.png` : 'images/misc/loading.gif'} {...restProps} />
}

Profiles.Name = function profilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

Profiles.User = function profilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}